import { atom } from 'recoil';
import { ISickItem } from 'type/interface';

export const searchResult = atom<ISickItem[] | []>({
  key: 'serchResult',
  default: [],
});

export const keywordValue = atom({
  key: 'keywordValue',
  default: '',
});
