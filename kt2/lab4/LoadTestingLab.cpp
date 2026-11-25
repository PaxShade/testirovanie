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

// --- 1. Эмуляция целевой системы (Target System) ---
// Имитируем обращение к БД или вызов внешнего API
bool simulate_network_request() {
    thread_local std::mt19937 generator(std::random_device{}());
    std::uniform_int_distribution<int> distribution(10, 50);

    int delay = distribution(generator);
    std::this_thread::sleep_for(milliseconds(delay));

    // Имитируем вероятность ошибки (HTTP 500)
    return distribution(generator) > 12;
}

// --- 2. Глобальные счётчики метрик ---
std::atomic<int> successful_requests(0);
std::atomic<int> failed_requests(0);
std::mutex latencies_mutex;
std::vector<double> latencies;

// --- 3. Логика виртуального пользователя (Worker) ---
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

// --- 4. Координатор нагрузочного тестирования ---
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
        std::cout << "Ramp-up step:            " << ramp_up_ms << " ms (ожидайте ~55 сек...)\n";
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

    // --- 5. Анализ и вывод результатов ---
    double avg_latency = std::accumulate(latencies.begin(), latencies.end(), 0.0) / latencies.size();
    double tps = successful_requests.load() / test_duration.count();

    std::cout << "=== Результаты нагрузочного теста ===\n";
    std::cout << "Время выполнения:              " << test_duration.count() << " секунд\n";
    std::cout << "Успешные запросы:              " << successful_requests.load() << "\n";
    std::cout << "Неудачные запросы:             " << failed_requests.load() << "\n";
    std::cout << "Пропускная способность (TPS):  " << tps << " запросов/сек\n";
    std::cout << "Средняя задержка:              " << avg_latency << " мс\n";

    if (show_percentiles && !latencies.empty()) {
        std::sort(latencies.begin(), latencies.end());

        size_t index95 = static_cast<size_t>(latencies.size() * 0.95);
        size_t index99 = static_cast<size_t>(latencies.size() * 0.99);
        if (index95 >= latencies.size()) index95 = latencies.size() - 1;
        if (index99 >= latencies.size()) index99 = latencies.size() - 1;

        std::cout << "P95 задержка:                  " << latencies[index95] << " мс\n";
        std::cout << "P99 задержка:                  " << latencies[index99] << " мс\n";
    }

    std::cout << "\n";
}

int main() {
    setlocale(LC_ALL, "");

#ifdef _DEBUG
    std::cout << "[Конфигурация сборки: DEBUG]\n\n";
#else
    std::cout << "[Конфигурация сборки: RELEASE]\n\n";
#endif

    // Базовый тест (50 потоков)
    run_load_test("Тест 0: Базовый (50 потоков)", 50, 20, false, 0);

    // Задание 1: Масштабируемость (500 потоков)
    run_load_test("Тест 1: Масштабируемость (500 потоков)", 500, 20, false, 0);

    // Задание 2: Расчёт перцентилей P95 и P99 (500 потоков)
    run_load_test("Тест 2: Расчёт перцентилей P95 и P99 (500 потоков)", 500, 20, true, 0);

    // Задание 3: Механизм Ramp-up (500 потоков, шаг 100 мс)
    run_load_test("Тест 3: Механизм Ramp-up (500 потоков, шаг 100 мс)", 500, 20, true, 100);

    return 0;
}