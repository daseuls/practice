import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { keywordValue, searchResult } from 'store/recoil';
import SearchBar from 'components/searchBar/SearchBar';
import SearchRecommendation from 'components/searchRecommendation/SearchRecommendation';
import styles from '../routes.module.scss';

const Main = () => {
  const keyword = useRecoilValue(keywordValue);
  const setResultList = useSetRecoilState(searchResult);

  const fetchData = () => {
    return axios.get(
      `${process.env.REACT_APP_BASE_URL}?ServiceKey=${process.env.REACT_APP_SERVICE_KEY}&searchText=${keyword}&_type=json`
    );
  };

  const { isLoading, data } = useQuery(['data', keyword], fetchData);

  useEffect(() => {
    if (data) {
      if (data?.data.response.body.totalCount === 0 || keyword === '') {
        setResultList([]);
      } else if (data?.data.response.body.totalCount === 1) {
        setResultList([data?.data.response.body.items.item]);
      } else {
        setResultList(data?.data.response.body.items.item);
      }
    }
  }, [data, keyword, setResultList]);

  return (
    <div className={styles.mainWrapper}>
      <h1>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      <SearchBar />
      <SearchRecommendation isLoading={isLoading} />
    </div>
  );
};

export default Main;
