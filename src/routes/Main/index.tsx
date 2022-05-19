import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { keywordValue } from 'store/recoil';
import SearchBar from 'components/searchBar/SearchBar';
import SearchRecommendation from 'components/searchRecommendation/SearchRecommendation';
import styles from '../routes.module.scss';
import { getSearchResult } from 'utils/fetchData';

const Main = () => {
  const keyword = useRecoilValue(keywordValue);

  const { isLoading, data } = useQuery(['data', keyword], () => getSearchResult(keyword), {
    enabled: !!keyword,
    staleTime: Infinity,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return (
    <div className={styles.mainWrapper}>
      <h1>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      <SearchBar />
      <SearchRecommendation data={data} isLoading={isLoading} />
    </div>
  );
};

export default Main;
