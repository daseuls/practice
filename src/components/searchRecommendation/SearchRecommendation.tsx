import { BsSearch } from 'react-icons/bs';

import styles from './searchRecommendation.module.scss';

interface IProps {
  isLoading: boolean;
}

const SearchRecommendation = ({ isLoading }: IProps) => {
  return (
    <div className={styles.recommendationWrapper}>
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <ul>
          <li>
            <span>
              <BsSearch className={styles.reactIcons} />
            </span>
            <span className={styles.searchWord}>검색어1</span>
          </li>
          <li>
            <span>
              <BsSearch className={styles.reactIcons} />
            </span>
            <span className={styles.searchWord}>검색어2</span>
          </li>
          <li>
            <span>
              <BsSearch className={styles.reactIcons} />
            </span>
            <span className={styles.searchWord}>검색어3</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SearchRecommendation;
