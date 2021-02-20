import {COMMENTS_NAMES,AVATAR_IDS,descriptionLists,commentsLists} from './data-arrays.js';


const LIKES_MIN_LENGTH = 15;
const LIKES_MAX_LENGTH = 100;

const COMMENTS_MIN_LENGTH = 1;
const COMMENTS_MAX_LENGTH = 3;



let commentId = 0;

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
const getLengthString = (checkedString, maxLength) => checkedString.length < maxLength;

const getCommentCounter = () => getRandomInteger(0,2) - 1;

const getPhotoUrl = (i) => {
  return `photos/${i}.jpg`;
}

const getAvatarUrl = (i) => {
  if (AVATAR_IDS.length > COMMENTS_NAMES.length) {
    throw new Error('количество id в массиве ограничено');
  }

  return `avatar-${AVATAR_IDS[i]}.svg`;
}

let getRandomGuest = (array) => {
  return getRandomInteger(0, array.length - 1);
};

const  getRandomElements = (array, max = 0) => {

  let result = array.sort(getCommentCounter);

  if(!max) {
    return result
  }

  return result.slice(0, getRandomInteger(1,max));

}

const getRandomArrayElem = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
}

const getCommentId = () => {
  return commentId++;
}

const getComment = () => {
  const guestData = getRandomGuest(COMMENTS_NAMES)

  return {
    id: getCommentId(),
    avatar: getAvatarUrl(guestData),
    message:  getRandomElements(commentsLists, 2).join(' '),
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

export {getLengthString,getPhotosData};
