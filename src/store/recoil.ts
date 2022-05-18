import { atom } from 'recoil';

export const searchResult = atom({
  key: 'searchResult',
  default: [],
});

export const searchValue = atom({
  key: 'searchValue',
  default: '',
});
