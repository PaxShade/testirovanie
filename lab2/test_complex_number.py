import unittest
from complex_number import ComplexNumber

class TestComplexNumber(unittest.TestCase):
    
    def test_add(self):
        # Проверка сложения: (2 + 3i) + (1 + 4i) = (3 + 7i)
        c1 = ComplexNumber(2, 3)
        c2 = ComplexNumber(1, 4)
        result = c1.add(c2)
        self.assertEqual(result, ComplexNumber(3, 7))

    def test_multiply(self):
        # Проверка умножения: (2 + 3i) * (1 + 4i) = (2 - 12) + (8 + 3)i = -10 + 11i
        c1 = ComplexNumber(2, 3)
        c2 = ComplexNumber(1, 4)
        result = c1.multiply(c2)
        self.assertEqual(result, ComplexNumber(-10, 11))

    def test_add_with_negative(self):
        # Проверка сложения с отрицательными числами: (-5 + 2i) + (3 - 2i) = -2 + 0i
        c1 = ComplexNumber(-5, 2)
        c2 = ComplexNumber(3, -2)
        result = c1.add(c2)
        self.assertEqual(result, ComplexNumber(-2, 0))

if __name__ == '__main__':
    unittest.main()
