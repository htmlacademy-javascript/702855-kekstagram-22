"use strict";
// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInteger = (min, max) => {
  let numMin = Math.floor(min);
  let numMax = Math.floor(max);

  if (numMin < 0 || numMax < 0) {
    throw new Error("Вы таки прислали фигню.");
  }
  if (numMin > numMax) {
    [numMax, numMin] = [numMin, numMax];
  }
  return Math.floor(Math.random() * (numMax - numMin) + 1) + min;
};
let someFunc = getRandomInteger(1, 2);

// Функция для проверки максимальной длины строки.
const COMMENT_LENGTH = 140;
const commentString =
  "Функция для проверки максимальной длины строки максимальной длины строки";

const validateComment = (checkedString, maxLength) =>
  checkedString.length < maxLength;

validateComment(commentString, COMMENT_LENGTH);
