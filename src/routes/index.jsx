import { Route, Routes } from 'react-router-dom';
import styles from './routes.module.scss';
import Main from './Main';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </RecoilRoot>
  );
};

export default App;
