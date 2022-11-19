import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Groups } from '../pages/Groups';
import { Exam } from '../pages/Exam';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Groups />} />
        <Route path="/exam" element={<Exam />} />  {/* for viewing and testing only */ }
      </Route>

      {/* páginas sem navbar  */}

      {/* <Route path="*" element={} /> */}
    </Routes>
  );
};
