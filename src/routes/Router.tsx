import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Authentication } from '../pages/Authentication';
import { Exam } from '../pages/Exam';
import { Group } from '../pages/Group';
import { Groups } from '../pages/Groups';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { PreferencesDefaultLayout } from '../pages/Preferences';
import { General } from '../pages/Preferences/pages/General';

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

        <Route path="/exam" element={<Exam />} />

        <Route path="/preferencias" element={<PreferencesDefaultLayout />}>
          <Route
            path="/preferencias"
            element={<Navigate to="/preferencias/geral" />}
          />
          <Route path="/preferencias/geral" element={<General />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
