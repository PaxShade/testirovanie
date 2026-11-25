#include <iostream>
#include <vector>
#include <thread>
#include <chrono>
#include <atomic>
#include <mutex>
#include <random>
#include <numeric>
#include <algorithm>
#include <string>
#include <locale>

using namespace std::chrono;

// --- 1. Ýìóëÿöèÿ öåëåâîé ñèñòåìû (Target System) ---
// Èìèòèðóåì îáðàùåíèå ê ÁÄ èëè âûçîâ âíåøíåãî API
bool simulate_network_request() {
    thread_local std::mt19937 generator(std::random_device{}());
    std::uniform_int_distribution<int> distribution(10, 50);

    int delay = distribution(generator);
    std::this_thread::sleep_for(milliseconds(delay));

    // Èìèòèðóåì âåðîÿòíîñòü îøèáêè (HTTP 500)
    return distribution(generator) > 12;
}

// --- 2. Ãëîáàëüíûå ñ÷¸ò÷èêè ìåòðèê ---
std::atomic<int> successful_requests(0);
std::atomic<int> failed_requests(0);
std::mutex latencies_mutex;
std::vector<double> latencies;

// --- 3. Ëîãèêà âèðòóàëüíîãî ïîëüçîâàòåëÿ (Worker) --- 
void load_worker(int requests_per_thread) {
    std::vector<double> local_latencies;
    local_latencies.reserve(requests_per_thread);

    for (int i = 0; i < requests_per_thread; ++i) {
        auto start_time = high_resolution_clock::now();

        bool success = simulate_network_request();

        auto end_time = high_resolution_clock::now();
        duration<double, std::milli> elapsed = end_time - start_time;

        local_latencies.push_back(elapsed.count());

        if (success) {
            successful_requests++;
        }
        else {
            failed_requests++;
        }
    }

    std::lock_guard<std::mutex> lock(latencies_mutex);
    latencies.insert(latencies.end(), local_latencies.begin(), local_latencies.end());
}

// --- 4. Êîîðäèíàòîð íàãðóçî÷íîãî òåñòèðîâàíèÿ ---
void run_load_test(
    const std::string& title,
    int num_threads,
    int requests_per_thread,
    bool show_percentiles,
    int ramp_up_ms
) {
    successful_requests = 0;
    failed_requests = 0;
    latencies.clear();

    const int total_requests = num_threads * requests_per_thread;
    latencies.reserve(total_requests);

    std::cout << "====================================================\n";
    std::cout << title << "\n";
    std::cout << "Virtual Users (Threads): " << num_threads << "\n";
    std::cout << "Requests per User:       " << requests_per_thread << "\n";
    std::cout << "Total Requests planned:  " << total_requests << "\n";
    if (ramp_up_ms > 0) {
        std::cout << "Ramp-up step:            " << ramp_up_ms << " ms (îæèäàéòå ~55 ñåê...)\n";
    }
    std::cout << "\n";

    auto test_start = high_resolution_clock::now();

    std::vector<std::thread> threads;
    threads.reserve(num_threads);
    for (int i = 0; i < num_threads; ++i) {
        threads.emplace_back(load_worker, requests_per_thread);
        if (ramp_up_ms > 0) {
            std::this_thread::sleep_for(milliseconds(ramp_up_ms));
        }
    }

    for (auto& t : threads) {
        t.join();
    }

    auto test_end = high_resolution_clock::now();
    duration<double> test_duration = test_end - test_start;

    // --- 5. Àíàëèç è âûâîä ðåçóëüòàòîâ ---
    double avg_latency = std::accumulate(latencies.begin(), latencies.end(), 0.0) / latencies.size();
    double tps = successful_requests.load() / test_duration.count();

    std::cout << "=== Ðåçóëüòàòû íàãðóçî÷íîãî òåñòà ===\n";
    std::cout << "Âðåìÿ âûïîëíåíèÿ:              " << test_duration.count() << " ñåêóíä\n";
    std::cout << "Óñïåøíûå çàïðîñû:              " << successful_requests.load() << "\n";
    std::cout << "Íåóäà÷íûå çàïðîñû:             " << failed_requests.load() << "\n";
    std::cout << "Ïðîïóñêíàÿ ñïîñîáíîñòü (TPS):  " << tps << " çàïðîñîâ/ñåê\n";
    std::cout << "Ñðåäíÿÿ çàäåðæêà:              " << avg_latency << " ìñ\n";

    if (show_percentiles && !latencies.empty()) {
        std::sort(latencies.begin(), latencies.end());

        size_t index95 = static_cast<size_t>(latencies.size() * 0.95);
        size_t index99 = static_cast<size_t>(latencies.size() * 0.99);
        if (index95 >= latencies.size()) index95 = latencies.size() - 1;
        if (index99 >= latencies.size()) index99 = latencies.size() - 1;

        std::cout << "P95 çàäåðæêà:                  " << latencies[index95] << " ìñ\n";
        std::cout << "P99 çàäåðæêà:                  " << latencies[index99] << " ìñ\n";
    }

    std::cout << "\n";
}

int main() {
    setlocale(LC_ALL, "");

#ifdef _DEBUG
    std::cout << "[Êîíôèãóðàöèÿ ñáîðêè: DEBUG]\n\n";
#else
    std::cout << "[Êîíôèãóðàöèÿ ñáîðêè: RELEASE]\n\n";
#endif

    // Áàçîâûé òåñò (50 ïîòîêîâ)
    run_load_test("Òåñò 0: Áàçîâûé (50 ïîòîêîâ)", 50, 20, false, 0);

    // Çàäàíèå 1: Ìàñøòàáèðóåìîñòü (500 ïîòîêîâ)
    run_load_test("Òåñò 1: Ìàñøòàáèðóåìîñòü (500 ïîòîêîâ)", 500, 20, false, 0);

    // Çàäàíèå 2: Ðàñ÷¸ò ïåðöåíòèëåé P95 è P99 (500 ïîòîêîâ)
    run_load_test("Òåñò 2: Ðàñ÷¸ò ïåðöåíòèëåé P95 è P99 (500 ïîòîêîâ)", 500, 20, true, 0);

    // Çàäàíèå 3: Ìåõàíèçì Ramp-up (500 ïîòîêîâ, øàã 100 ìñ)
    run_load_test("Òåñò 3: Ìåõàíèçì Ramp-up (500 ïîòîêîâ, øàã 100 ìñ)", 500, 20, true, 100);

    return 0;
}
