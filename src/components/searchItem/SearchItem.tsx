import React, { useRef, useEffect } from 'react';
import { ISickItem } from 'type/interface';
import { BsSearch } from 'react-icons/bs';
import styles from './searchItem.module.scss';
import { useRecoilValue } from 'recoil';
import { keywordValue } from 'store/recoil';

interface IProps {
  searchItem: ISickItem;
}

export const SearchItem = ({ searchItem }: IProps) => {
  const keyword = useRecoilValue(keywordValue);
  const spanRef = useRef<HTMLSpanElement>(null!);

  useEffect(() => {
    getBoldedResult();
  }, [keyword]);

  // const getBoldedResult = () => {
  //   const result = searchItem.sickNm
  //     .split(' ')
  //     .map((string) => {
  //       if (string.includes(keyword)) {
  //         return `<strong className="boldText">${string}</strong>`;
  //       }
  //       return string;
  //     })
  //     .join(' ');

  //   spanRef.current.innerHTML = result;
  // };

  // 단어별
  const getBoldedResult = () => {
    const result = searchItem.sickNm
      .split('')
      .map((string) => {
        if (keyword.includes(string)) {
          return `<strong className="boldText">${string}</strong>`;
        }
        return string;
      })
      .join('');

    spanRef.current.innerHTML = result;
  };

  return (
    <li>
      <BsSearch className={styles.reactIcons} />
      <span ref={spanRef} className={`${styles.searchWord} searchWord`} />
    </li>
  );
};
