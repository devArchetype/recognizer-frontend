import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Exam } from '../pages/Exam';
import { Groups } from '../pages/Groups';
import { NotFound } from '../pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Groups />} />

        {/* for viewing and testing only */}
        <Route
          path="/exam"
          element={<Exam examName="Prova A" examined="Joãozinho Batata" />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
      {/* páginas sem navbar  */}
    </Routes>
  );
};
