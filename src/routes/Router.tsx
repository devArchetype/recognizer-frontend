import { Route, Navigate, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Exam } from '../pages/Exam';
import { Group } from '../pages/Group';
import { Groups } from '../pages/Groups';
import { Exams } from '../pages/Exams';
import { NotFound } from '../pages/NotFound';
import { Authentication } from '../pages/Authentication';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Authentication page="login" />} />
      <Route path="/cadastro" element={<Authentication page="cadastro" />} />
      <Route
        path="/recuperacao"
        element={<Authentication page="recuperacao" />}
      />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/grupos" element={<Groups />} />
        <Route path="/grupos/0000000" element={<Group />} />

        <Route
          path="/exam"
          element={<Exam examName="Prova A" examined="Joãozinho Batata" />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
