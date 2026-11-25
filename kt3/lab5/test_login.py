import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

URL = "https://www.saucedemo.com/"


@pytest.fixture(scope="module")
def browser():
    """Инициализация Mozilla Firefox на время выполнения всего набора тестов."""
    driver = webdriver.Firefox()
    driver.maximize_window()
    yield driver
    driver.quit()


def test_tc01_logo_display(browser):
    """TC-1: Проверка отображения и текста логотипа страницы."""
    browser.get(URL)
    logo = browser.find_element(By.CLASS_NAME, "login_logo")
    assert logo.is_displayed()
    assert logo.text == "Swag Labs"


def test_tc02_username_field(browser):
    """TC-2: Проверка поля ввода логина (видимость, плейсхолдер, ввод текста)."""
    browser.get(URL)
    username_input = browser.find_element(By.ID, "user-name")
    assert username_input.is_displayed()
    assert username_input.get_attribute("placeholder") == "Username"
    username_input.send_keys("standard_user")
    assert username_input.get_attribute("value") == "standard_user"


def test_tc03_password_masking(browser):
    """TC-3: Проверка поля пароля (плейсхолдер и маскирование символов)."""
    browser.get(URL)
    password_input = browser.find_element(By.ID, "password")
    assert password_input.is_displayed()
    assert password_input.get_attribute("placeholder") == "Password"
    assert password_input.get_attribute("type") == "password"


def test_tc04_login_button(browser):
    """TC-4: Проверка кнопки входа Login (видимость, активность, подпись)."""
    browser.get(URL)
    login_button = browser.find_element(By.ID, "login-button")
    assert login_button.is_displayed()
    assert login_button.is_enabled()
    assert login_button.get_attribute("value") == "Login"


def test_tc05_empty_fields_validation(browser):
    """TC-5: Проверка обязательных полей при отправке пустой формы."""
    browser.get(URL)
    browser.find_element(By.ID, "login-button").click()

    error = WebDriverWait(browser, 5).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "h3[data-test='error']"))
    )
    assert "Epic sadface: Username is required" in error.text


def test_tc06_empty_password_validation(browser):
    """TC-6: Проверка валидации при заполненном логине и пустом пароле."""
    browser.get(URL)
    browser.find_element(By.ID, "user-name").send_keys("standard_user")
    browser.find_element(By.ID, "login-button").click()

    error = WebDriverWait(browser, 5).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "h3[data-test='error']"))
    )
    assert "Epic sadface: Password is required" in error.text


def test_tc07_close_error_banner(browser):
    """TC-7: Проверка закрытия плашки с ошибкой по нажатию на кнопку '×'."""
    browser.get(URL)
    browser.find_element(By.ID, "login-button").click()

    WebDriverWait(browser, 5).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "h3[data-test='error']"))
    )
    browser.find_element(By.CLASS_NAME, "error-button").click()

    errors = browser.find_elements(By.CSS_SELECTOR, "h3[data-test='error']")
    assert len(errors) == 0


def test_tc08_invalid_password(browser):
    """TC-8: Негативный сценарий — вход с неверным паролем."""
    browser.get(URL)
    browser.find_element(By.ID, "user-name").send_keys("standard_user")
    browser.find_element(By.ID, "password").send_keys("WrongPassword")
    browser.find_element(By.ID, "login-button").click()

    error = WebDriverWait(browser, 5).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "h3[data-test='error']"))
    )
    assert (
        "Epic sadface: Username and password do not match any user in this service"
        in error.text
    )


def test_tc09_locked_out_user(browser):
    """TC-9: Негативный сценарий — вход заблокированного пользователя."""
    browser.get(URL)
    browser.find_element(By.ID, "user-name").send_keys("locked_out_user")
    browser.find_element(By.ID, "password").send_keys("secret_sauce")
    browser.find_element(By.ID, "login-button").click()

    error = WebDriverWait(browser, 5).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "h3[data-test='error']"))
    )
    assert "Epic sadface: Sorry, this user has been locked out." in error.text


def test_tc10_successful_login(browser):
    """TC-10: Успешная авторизация под валидной учётной записью."""
    browser.get(URL)
    browser.find_element(By.ID, "user-name").send_keys("standard_user")
    browser.find_element(By.ID, "password").send_keys("secret_sauce")
    browser.find_element(By.ID, "login-button").click()

    title = WebDriverWait(browser, 5).until(
        EC.visibility_of_element_located((By.CLASS_NAME, "title"))
    )
    assert title.text == "Products"