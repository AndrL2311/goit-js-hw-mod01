// Задание
// Функция normalizeInput(input) принимает строку(параметр input) и возвращает такую же строку,
//     но в нижнем регистре.Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

// Тесты
// Объявлена функция normalizeInput(input)
// Вызов функции normalizeInput("Hello world") возвращает "hello world"
// Вызов функции normalizeInput("This ISN'T SpaM") возвращает "this isn't spam"
// Вызов функции normalizeInput("Big SALE") возвращает "big sale"

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}