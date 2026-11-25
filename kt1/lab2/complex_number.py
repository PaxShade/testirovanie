class ComplexNumber:
    """Класс для представления комплексного числа."""
    
    def __init__(self, real: float, imag: float):
        """Инициализация действительной (real) и мнимой (imag) частей."""
        self.real = real
        self.imag = imag

    def add(self, other: 'ComplexNumber') -> 'ComplexNumber':
        """Сложение двух комплексных чисел."""
        return ComplexNumber(self.real + other.real, self.imag + other.imag)

    def multiply(self, other: 'ComplexNumber') -> 'ComplexNumber':
        """Умножение двух комплексных чисел по правилу (a+bi)(c+di) = (ac-bd) + (ad+bc)i."""
        real_part = self.real * other.real - self.imag * other.imag
        imag_part = self.real * other.imag + self.imag * other.real
        return ComplexNumber(real_part, imag_part)

    def __eq__(self, other: object) -> bool:
        """Проверка на равенство с учетом погрешности float (epsilon = 1e-9)."""
        if not isinstance(other, ComplexNumber):
            return NotImplemented
        return abs(self.real - other.real) < 1e-9 and abs(self.imag - other.imag) < 1e-9
