import os
import subprocess
import sys
import unittest

TARGET_SCRIPT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "main.py")


def run_program(stdin_data: str):
    """Запуск main.py с передачей данных в stdin и получением вывода и кода возврата."""
    env = {**os.environ, "PYTHONIOENCODING": "utf-8"}
    proc = subprocess.run(
        [sys.executable, TARGET_SCRIPT],
        input=stdin_data,
        text=True,
        capture_output=True,
        encoding="utf-8",
        env=env,
    )
    return proc.stdout.strip(), proc.returncode


class TestMainGraphCoverage(unittest.TestCase):
    def _run_case(self, title, stdin_data, expected_out, expected_code, path):
        actual_out, actual_code = run_program(stdin_data)
        print(
            f"{title}: вход={stdin_data.strip()!r} -> "
            f"вывод={actual_out!r}, код={actual_code} | путь={path}"
        )
        self.assertEqual(actual_out, expected_out)
        self.assertEqual(actual_code, expected_code)

    def test_1_single_argument(self):
        self._run_case("Один аргумент", "5\n", "Ошибка ввода", 1, "[1, 2, 7]")

    def test_2_empty_input(self):
        self._run_case("Пустой ввод", "\n", "Ошибка ввода", 1, "[1, 2, 7]")

    def test_3_invalid_first_arg(self):
        self._run_case("Нечисловой 1-й аргумент", "abc 5\n", "Ошибка ввода", 1, "[1, 3, 5, 7]")

    def test_4_invalid_second_arg(self):
        self._run_case("Нечисловой 2-й аргумент", "5 xyz\n", "Ошибка ввода", 1, "[1, 3, 4, 5, 7]")

    def test_5_valid_positive(self):
        self._run_case("Положительные числа", "6 7\n", "42", 0, "[1, 3, 4, 6, 7]")

    def test_6_negative_and_zero(self):
        self._run_case("Отрицательное и ноль", "-12 0\n", "0", 0, "[1, 3, 4, 6, 7]")


if __name__ == "__main__":
    unittest.main(verbosity=1)