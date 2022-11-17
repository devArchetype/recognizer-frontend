import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Groups } from '../pages/Groups';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Groups />} />
      </Route>

      {/* páginas sem navbar  */}

      {/* <Route path="*" element={} /> */}
    </Routes>
  );
};
