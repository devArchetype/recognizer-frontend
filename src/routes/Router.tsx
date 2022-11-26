import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Exam } from '../pages/Exam';
import { Group } from '../pages/Group';
import { Groups } from '../pages/Groups';
import { NotFound } from '../pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/grupos" />} />
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
