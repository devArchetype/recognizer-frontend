import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { SessionDefaultLayout } from '../components/layouts/SessionDefaultLayout';
import { Exam } from '../pages/Exam';
import { Group } from '../pages/Group';
import { Groups } from '../pages/Groups';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { PreferencesDefaultLayout } from '../pages/Preferences';
import { General } from '../pages/Preferences/pages/General';
import { Login } from '../pages/Session/Login';
import { Recovery } from '../pages/Session/Recovery';
import { Registration } from '../pages/Session/Registration';

export const Router = () => {
  return (
    <Routes>
      <Route path="/session" element={<SessionDefaultLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="recovery" element={<Recovery />} />
      </Route>

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

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
