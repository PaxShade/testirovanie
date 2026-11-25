import unittest
from shopping_cart import ShoppingCart

class TestShoppingCart(unittest.TestCase):
    
    def setUp(self):
        # Инициализация новой корзины перед каждым тестом для обеспечения изоляции
        self.cart = ShoppingCart()

    def test_add_item(self):
        # Проверка добавления нового товара
        self.cart.add_item("Яблоко", 50.0, 3)
        self.assertIn("Яблоко", self.cart.items)
        self.assertEqual(self.cart.items["Яблоко"], (50.0, 3))

    def test_add_item_increase_quantity(self):
        # Проверка увеличения количества существующего товара
        self.cart.add_item("Хлеб", 30.0, 2)
        self.cart.add_item("Хлеб", 30.0, 1) # Цена та же, количество суммируется
        self.assertEqual(self.cart.items["Хлеб"], (30.0, 3))

    def test_get_total(self):
        # Проверка корректного расчета общей суммы
        self.cart.add_item("Молоко", 80.0, 2)  # 160.0
        self.cart.add_item("Сыр", 200.0, 1)    # 200.0
        self.assertEqual(self.cart.get_total(), 360.0)

    def test_remove_item(self):
        # Проверка удаления товара
        self.cart.add_item("Вода", 40.0, 5)
        self.cart.remove_item("Вода")
        self.assertNotIn("Вода", self.cart.items)

    def test_remove_nonexistent_item(self):
        # Проверка выброса исключения при удалении несуществующего товара
        with self.assertRaises(ValueError) as context:
            self.cart.remove_item("Чай")
        self.assertEqual(str(context.exception), "Товар 'Чай' отсутствует в корзине")

    def test_invalid_quantity(self):
        # Проверка выброса исключения при добавлении товара с нулевым количеством
        with self.assertRaises(ValueError) as context:
            self.cart.add_item("Конфеты", 100.0, 0)
        self.assertEqual(str(context.exception), "Количество товара должно быть больше нуля")

if __name__ == '__main__':
    unittest.main()

