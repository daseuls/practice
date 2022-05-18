import SearchBar from 'components/searchBar/SearchBar';
import SearchRecommendation from 'components/searchRecommendation/SearchRecommendation';
import styles from '../routes.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Main = () => {
  const fetchData = () => {
    return axios.get(
      `${process.env.REACT_APP_BASE_URL}?ServiceKey=${process.env.REACT_APP_SERVICE_KEY}&searchText=갑상선&_type=json`
    );
  };

  const { isLoading, data, isError, error } = useQuery('data', fetchData);

  // console.log(isLoading, data, isError, error);

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
