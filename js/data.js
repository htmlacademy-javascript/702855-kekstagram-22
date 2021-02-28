import {
  getRandomInteger,
  getRandomElements,
  getRandomArrayElem} from './util.js';

/*eslint-disable no-unused-vars*/
const COMMENT_LENGTH = 140;
/* eslint-enable no-unused-vars */

const LIKES_MIN_LENGTH = 15;
const LIKES_MAX_LENGTH = 100;

const COMMENTS_MIN_LENGTH = 1;
const COMMENTS_MAX_LENGTH = 3;

const COMMENTS_NAMES = ['Мирон', 'Юлия', 'Никита', 'Ксения', 'Роман', 'Марьям'];

const AVATAR_IDS = [2, 4, 1, 6, 3, 5];

const DESCRIPTION_LISTS = [
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
  'Правила третей, во всей красе',
];

const COMMENT_LISTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

let commentId = 0;

const getPhotoUrl = (i) => {
  return `photos/${i}.jpg`;
};

const getAvatarUrl = (i) => {
  if (AVATAR_IDS.length > COMMENTS_NAMES.length) {
    throw new Error('количество id в массиве ограничено');
  }

  return `avatar-${AVATAR_IDS[i]}.svg`;
};

let getRandomGuest = (array) => {
  return getRandomInteger(0, array.length - 1);
};

const getCommentId = () => {
  return commentId++;
};

const getComment = () => {
  const guestData = getRandomGuest(COMMENTS_NAMES);

  return {
    id: getCommentId(),
    avatar: getAvatarUrl(guestData),
    message: getRandomElements(COMMENT_LISTS, 2).join(' '),
    name: COMMENTS_NAMES[guestData],
  };
};

const getComments = (n) => {
  const comments = [];

  for (let i = 0; i < n; i++) {
    comments.push(getComment());
  }

  return comments;
};

const getPhotosData = (photosCounter) => {
  const photos = [];

  for (let i = 1; i < photosCounter; i++) {
    photos.push({
      id: i,
      url: getPhotoUrl(i),
      description: getRandomArrayElem(DESCRIPTION_LISTS),
      likes: getRandomInteger(LIKES_MIN_LENGTH, LIKES_MAX_LENGTH),
      comments: getComments(getRandomInteger(COMMENTS_MIN_LENGTH, COMMENTS_MAX_LENGTH)),
    });
  }

  return photos;
};

export { getPhotosData };
