import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Exam } from '../pages/Exam';
import { Groups } from '../pages/Groups';
import { Exams } from '../pages/Exams';
import { NotFound } from '../pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/grupos" />} />
        <Route path="/grupos" element={<Groups />} />

        {/* for viewing and testing only */}
        <Route
          path="/provas"
          element={<Exams examName="Prova A" group="Grupo A" />}
        />
        <Route
          path="/provas/prova"
          element={<Exam examName="Prova A" examined="Joãozinho Batata" />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
      {/* páginas sem navbar  */}
    </Routes>
  );
};
