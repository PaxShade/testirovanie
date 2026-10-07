from typing import Dict, Tuple

class ShoppingCart:
    """Класс для представления корзины покупок."""
    
    def __init__(self):
        """Инициализация пустой корзины. Хранилище: {название_товара: (цена, количество)}."""
        self.items: Dict[str, Tuple[float, int]] = {}

    def add_item(self, name: str, price: float, quantity: int):
        """Добавление товара в корзину или увеличение его количества."""
        if price < 0:
            raise ValueError("Цена товара не может быть отрицательной")
        if quantity <= 0:
            raise ValueError("Количество товара должно быть больше нуля")
        
        if name in self.items:
            old_price, old_qty = self.items[name]
            self.items[name] = (old_price, old_qty + quantity)
        else:
            self.items[name] = (price, quantity)

    def remove_item(self, name: str):
        """Полное удаление товара из корзины по названию."""
        if name not in self.items:
            raise ValueError(f"Товар '{name}' отсутствует в корзине")
        del self.items[name]

    def get_total(self) -> float:
        """Вычисление общей стоимости всех товаров в корзине."""
        return sum(price * qty for price, qty in self.items.values())
