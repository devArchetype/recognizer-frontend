import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Exam } from '../pages/Exam';
import { Groups } from '../pages/Groups';
import { Exams } from '../pages/Exams';
import { NotFound } from '../pages/NotFound';
import { Authentication } from '../pages/Authentication';

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Authentication page="login"/>} />
      <Route path="/cadastro" element={<Authentication page="cadastro"/>} />
      <Route path="/recuperacao" element={<Authentication page="recuperacao"/>}  />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/grupos" />} />
        <Route path="/grupos" element={<Groups />} />

        {/* for viewing and testing only */}
        <Route path="/grupos/provas" element={<Exams />} />
        <Route path="/grupos/provas/*" element={<Exam />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      {/* páginas sem navbar  */}
    </Routes>
  );
};
