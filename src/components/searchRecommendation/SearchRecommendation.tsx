import { Loading } from 'components/loading/Loading';
import { SearchItem } from 'components/searchItem/SearchItem';
import { ISickItem } from 'type/interface';

import styles from './searchRecommendation.module.scss';

interface IProps {
  isLoading: boolean;
  data: ISickItem[];
}

const SearchRecommendation = ({ isLoading, data }: IProps) => {
  return (
    <div className={styles.recommendationWrapper}>
      {isLoading ? (
        <div className={styles.loadingWrapper}>
          <Loading />
        </div>
      ) : (
        <ul>
          {data.length === 0 ? (
            <div>검색결과가 없습니다</div>
          ) : (
            <div>
              <span>추천 검색어</span>
              {data.map((searchItem: ISickItem, index) => (
                <SearchItem searchItem={searchItem} key={`${index}${searchItem.sickCd}`} />
              ))}
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchRecommendation;
