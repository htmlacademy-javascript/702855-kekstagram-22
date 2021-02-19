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


const LIKES_MIN_LENGTH = 15;
const LIKES_MAX_LENGTH = 100;

const COMMENTS_MIN_LENGTH = 1;
const COMMENTS_MAX_LENGTH = 3;

const COMMENTS_NAMES = ['Мирон','Юлия','Никита','Ксения','Роман','Марьям'];

const AVATAR_IDS = [2,4,1,6,3,5];

const descriptionLists = [
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

const commentsLists = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const getCommentCounter = () => getRandomInteger(0,2) - 1;

let commentId = 0;

const getCommentId = () => {
  return commentId++;
}

const getPhotoUrl = (i) => {
  return `photos/${i}.jpg`;
}

const getAvatarUrl = (i) => {
  if (AVATAR_IDS.length > + COMMENTS_NAMES.length) {
    throw new Error('количество id в массиве ограничено');
  }

  return `avatar-${AVATAR_IDS[i]}.svg`;
}

let getRandomGuest = (elem) => {
  return getRandomInteger(0, elem.length - 1);
};

const getCommentsFilter = (commentsLists) => {
  const commentsFilterResult = commentsLists.sort(getCommentCounter).slice(0, getRandomInteger(1,2))
  return commentsFilterResult.join(' ');
}

const getRandomArrayElem = (elem) => {
  return elem[getRandomInteger(0, elem.length - 1)];
}

const getComment = () => {
  const guestData = getRandomGuest(COMMENTS_NAMES)
  return {
    id: getCommentId(),
    avatar: getAvatarUrl(guestData),
    message: getCommentsFilter(commentsLists),
    name: COMMENTS_NAMES[guestData],
  }
}

const getComments = (n) => {
  const comments = [];

  for(let i = 0; i < n; i++) {
    comments.push(getComment());
  }

  return comments;
}

const getPhotosData = (photosCounter) => {

  const photos = [];

  for(let i = 1; i < photosCounter; i++ ) {
    photos.push({
      id: i,
      url: getPhotoUrl(i),
      description: getRandomArrayElem(descriptionLists),
      likes: getRandomInteger(LIKES_MIN_LENGTH, LIKES_MAX_LENGTH),
      comments: getComments(getRandomInteger(COMMENTS_MIN_LENGTH,COMMENTS_MAX_LENGTH))});
  }

  return photos;
}

getPhotosData(SIMILAR_ARRAY_COUNT);

console.log(getPhotosData(SIMILAR_ARRAY_COUNT));
