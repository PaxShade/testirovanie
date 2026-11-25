import sys
try:
    input_data = input().split()
    if len(input_data) < 2:
        print("Ошибка ввода")
        sys.exit(1)
    a = int(input_data[0])
    b = int(input_data[1])
    result = a * b
    print(result)
except ValueError:
    print("Ошибка ввода")
    sys.exit(1)
