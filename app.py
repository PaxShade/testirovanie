import http.server
import os
import socket
import sys
import webbrowser

START_PORT = 8000
HOST = "127.0.0.1"

# Расширения, которые браузер должен открывать как текст в UTF-8, а не скачивать
UTF8_TEXT_EXTENSIONS = {
    ".c", ".h", ".hpp",
    ".py", ".ts", ".css",
    ".md", ".txt", ".json", 
    ".xml", ".csv",
}


class DevHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP-обработчик без кэширования и с корректной UTF-8 кодировкой для кода."""

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def guess_type(self, path):
        _, ext = os.path.splitext(path)
        if ext.lower() in UTF8_TEXT_EXTENSIONS:
            return "text/plain; charset=utf-8"
        mime = super().guess_type(path)
        if mime and mime.startswith("text/") and "charset=" not in mime:
            return f"{mime}; charset=utf-8"
        return mime

    def log_message(self, format, *args):
        sys.stdout.write(f"[HTTP] {self.address_string()} - {format % args}\n")


def find_free_port(start_port: int) -> int:
    for port in range(start_port, start_port + 100):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            if sock.connect_ex((HOST, port)) != 0:
                return port
    raise RuntimeError("Не удалось найти свободный порт в диапазоне 8000–8099.")


def main():
    repo_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(repo_dir)

    port = find_free_port(START_PORT)
    url = f"http://localhost:{port}/"

    http.server.ThreadingHTTPServer.allow_reuse_address = True

    with http.server.ThreadingHTTPServer((HOST, port), DevHTTPRequestHandler) as httpd:
        print("=" * 60)
        print(f"Локальный сервер запущен: {url}")
        print(f"Корневая папка:           {repo_dir}")
        if not os.path.exists(os.path.join(repo_dir, "index.html")):
            print("Внимание: index.html не найден в корне, откроется список файлов.")
        print("Кэш отключен — изменения видны сразу после F5.")
        print("Для остановки нажмите Ctrl + C")
        print("=" * 60)

        webbrowser.open(url)

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nСервер остановлен.")


if __name__ == "__main__":
    main()