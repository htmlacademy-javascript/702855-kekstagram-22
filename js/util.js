// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInteger = (min, max) => {
  let numMin = Math.floor(min);
  let numMax = Math.floor(max);

  if (numMin < 0 || numMax < 0) {
    throw new Error('Что то пошло не так.');
  }
  if (numMin > numMax) {
    [numMax, numMin] = [numMin, numMax];
  }
  return Math.floor(Math.random() * (numMax - numMin + 1)) + min;
};

const getLengthString = (checkedString, maxLength) => {
  checkedString.length < maxLength;
};

const getCommentCounter = () => getRandomInteger(0, 2) - 1;

const getRandomElements = (array, max = 0) => {
  let result = array.sort(getCommentCounter);

  if (!max) {
    return result;
  }

  return result.slice(0, getRandomInteger(1, max));
};

const getRandomArrayElem = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

export {getRandomInteger, getLengthString, getRandomElements, getRandomArrayElem};
