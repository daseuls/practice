import { BsSearch } from 'react-icons/bs';
import _ from 'lodash';
import styles from './searchBar.module.scss';

const SearchBar = () => {
  const debounceOnChange = _.debounce((e: any) => {
    console.log(e.target.value);
  }, 1000);

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
