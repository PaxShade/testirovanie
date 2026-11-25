# Основы тестирования программного обеспечения

> ### 🌐 ДЛЯ УДОБСТВА ПРОСМОТРА РЕЗУЛЬТАТОВ СДЕЛАН САЙТ-НАВИГАТОР
> ## 👉 [ОТКРЫТЬ ВЕБ-ВЕРСИЮ (PAXSHADE.GITHUB.IO/TESTIROVANIE)](https://paxshade.github.io/testirovanie/)

На сайте собраны все контрольные точки, исходный код с встроенным просмотрщиком, а также кнопки скачивания и онлайн-просмотра отчётов.

---

## Общая информация

* **ВУЗ:** Воронежский институт высоких технологий (ВИВТ), 2026
* **Направление:** 09.03.01 «Информатика и вычислительная техника»
* **Студент:** Антипов Андрей Олегович (группа ИВТ-231)
* **Руководитель:** Доцент Лавлинская Оксана Юрьевна

---

## Содержание контрольных точек

| КТ | Работа | Тема | Код | Отчёт | Статус |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **КТ 1** | ЛР №1 | Интуитивное тестирование и отладка (`Error Guessing`) | [`kt1/lab1`](kt1/lab1) | [📄 Скачать](kt1/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B11.docx) · [👁 Онлайн](https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/PaxShade/testirovanie/main/kt1/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B11.docx) | ✅ Проверено (оценка) |
| **КТ 1** | ЛР №2 | Модульное тестирование (`Python`, `unittest`) | [`kt1/lab2`](kt1/lab2) | [📄 Скачать](kt1/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B12.docx) · [👁 Онлайн](https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/PaxShade/testirovanie/main/kt1/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B12.docx) | ✅ Проверено (оценка) |
| **КТ 2** | ЛР №3 | Тестовое покрытие на графах (ГОСТ Р 56922—2016) | [`kt2/lab3`](kt2/lab3) | [📄 Скачать](kt2/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B13.docx) · [👁 Онлайн](https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/PaxShade/testirovanie/main/kt2/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B13.docx) | 🔵 На проверке |
| **КТ 2** | ЛР №4 | Регрессионное и нагрузочное тестирование (`C++14`) | [`kt2/lab4`](kt2/lab4) | [📄 Скачать](kt2/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B14.docx) · [👁 Онлайн](https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/PaxShade/testirovanie/main/kt2/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B14.docx) | 🔵 На проверке |
| **КТ 3** | ЛР №5 | UI-тестирование и автоматизация (`Selenium`, `Pytest`) | [`kt3/lab5`](kt3/lab5) | [📄 Скачать](kt3/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B15.docx) · [👁 Онлайн](https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/PaxShade/testirovanie/main/kt3/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BB%D0%B0%D0%B15.docx) | 🔵 На проверке |
| **КТ 4** | — | Ожидается публикация заданий | — | *позже* | 🗓 Запланировано |

---

## Структура репозитория

```text
testirovanie/
├── kt1/
│   ├── lab1/
│   │   └── main.py
│   ├── lab2/
│   │   ├── complex_number.py
│   │   ├── shopping_cart.py
│   │   ├── test_complex_number.py
│   │   └── test_shopping_cart.py
│   ├── Отчет лаб1.docx
│   └── Отчет лаб2.docx
├── kt2/
│   ├── lab3/
│   │   ├── main.py
│   │   └── test_main_grah.py
│   ├── lab4/
│   │   ├── LoadTestingLab.cpp
│   │   ├── LoadTestingLab.sln
│   │   ├── LoadTestingLab.vcxproj
│   │   └── LoadTestingLab.vcxproj.filters
│   ├── Отчет лаб3.docx
│   └── Отчет лаб4.docx
├── static/
│   ├── css/
│   │   └── fonts.css
│   ├── fonts/
│   │   └── (Шрифты)
│   ├── img/
│   │   └── favicon.ico
│   └── js/
│   │   └── init.js
│   │   └── main.js
│   │   └── tailwindcss.3.4.17.js
├── index.html
└── README.md
