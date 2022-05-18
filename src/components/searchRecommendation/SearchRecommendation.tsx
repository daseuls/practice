import { BsSearch } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { searchResult } from 'store/recoil';

import { ISickItem } from 'type/interface';

import styles from './searchRecommendation.module.scss';

interface IProps {
  isLoading: boolean;
}

const SearchRecommendation = ({ isLoading }: IProps) => {
  const resultList = useRecoilValue(searchResult);

  return (
    <div className={styles.recommendationWrapper}>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <ul>
          {resultList.length === 0 ? (
            <div>검색결과가 없습니다</div>
          ) : (
            <div>
              <span>추천 검색어</span>
              {resultList.map((el: ISickItem, index) => (
                <li key={index}>
                  <BsSearch className={styles.reactIcons} />
                  <span className={styles.searchWord}>{el.sickNm}</span>
                </li>
              ))}
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchRecommendation;
