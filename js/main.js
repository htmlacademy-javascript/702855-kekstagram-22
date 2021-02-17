'use strict';

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

// Функция для проверки максимальной длины строки.

const COMMENT_LENGTH = 140;
const commentString = 'Функция для проверки максимальной длины строки';

const getLengthString = (checkedString, maxLength) => checkedString.length < maxLength;

getLengthString(commentString, COMMENT_LENGTH);

// module3-task1

const SIMILAR_ARRAY_COUNT = 26

let commentId = 0;

const descriptionList = [
  'Виды на..',
  'Хотел бы я сюда еще вернуться',
  'Полет нормальный',
  'Ну как то так',
  'Как вам такой момент ?',
  'Только не говорите, что горизонт завален',
  'Ммм..',
  'Что скажете ?',
  'Как сейчас помню те эмоции',
  'Отдыхаемс =)',
  'Невероятно, что тут еще добавить',
  'Правила третей, во всей красе'];

const LIKES_MIN_LENGTH = 15;
const LIKES_MAX_LENGTH = 100;

const COMMENTS_MIN_LENGTH = 1;
const COMMENTS_MAX_LENGTH = 3;

const commentsList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_COUNTER = () => getRandomInteger(0,1) - 1;

const COMMENTS_NAME = ['Мирон','Юлия','Никита','Ксения','Роман','Марьям'];
const AVATAR_ID = [2,4,1,6,3,5];

const getCommentId = () => {
  return commentId++;
}

const getPhotoUrl = (i) => {
  return `photos/${i}.jpg`;
}

const getAvatarUrl = (i) => {
  return `avatar-${AVATAR_ID[i]}.svg`;
}

let getRandomGuest = (elem) => {
  return getRandomInteger(0, elem.length - 1);
};

const commentsFilter = (commentsList) => {
  const commentsFilterResult = commentsList.sort(COMMENTS_COUNTER).slice(0, getRandomInteger(1,2))
  return commentsFilterResult.join(' ');
}

const getRandomArrayElem = (elem) => {
  return elem[getRandomInteger(0, elem.length - 1)];
}

const getComment = () => {
  const guestData = getRandomGuest(COMMENTS_NAME)
  return {
    id: getCommentId(),
    avatar: getAvatarUrl(guestData),
    message: commentsFilter(commentsList),
    name: COMMENTS_NAME[guestData],
  }
}

const getComments = (n) => {
  const commentsArr = [];

  for(let i = 0; i < n; i++) {
    commentsArr.push(getComment());
  }

  return commentsArr;
}

const getTemplateComments = (templateCommentsCounter) => {

  const templateCommets = []

  for(let i=1; i < templateCommentsCounter; i++ ) {
    templateCommets.push({
      id: i,
      url: getPhotoUrl(i),
      description: getRandomArrayElem(descriptionList),
      likes: getRandomInteger(LIKES_MIN_LENGTH, LIKES_MAX_LENGTH),
      comments: [getComments(getRandomInteger(COMMENTS_MIN_LENGTH,COMMENTS_MAX_LENGTH))]});
  }

  return templateCommets;
}

getTemplateComments(SIMILAR_ARRAY_COUNT);
