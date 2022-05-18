import { ChangeEvent } from 'react';
import { BsSearch } from 'react-icons/bs';

import _ from 'lodash';
import styles from './searchBar.module.scss';
import { useSetRecoilState } from 'recoil';
import { keywordValue } from 'store/recoil';

const SearchBar = () => {
  const setKeywordValue = useSetRecoilState(keywordValue);

  const debounceOnChange = _.debounce((e: ChangeEvent<HTMLInputElement>) => {
    setKeywordValue(e.target.value);
  }, 300);

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchBar}>
        <div>
          <BsSearch className={styles.reactIcons} />
        </div>
        <form>
          <input onChange={debounceOnChange} type='text' placeholder='질환명을 입력해 주세요.' />
        </form>
        <button type='button'>검색</button>
      </div>
    </div>
  );
};

export default SearchBar;
