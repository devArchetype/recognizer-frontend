import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { SessionDefaultLayout } from '../layouts/SessionDefaultLayout';
import { Group } from '../pages/Group';
import { GroupExam } from '../pages/GroupExam';
import { Groups } from '../pages/Groups';
import { Home } from '../pages/Home';
import { MemberExam } from '../pages/MemberExam';
import { NotFound } from '../pages/NotFound';
import { PreferencesDefaultLayout } from '../pages/Preferences';
import { General } from '../pages/Preferences/pages/General';
import { PrintExam } from '../pages/PrintExam';
import { Profile } from '../pages/Profile';
import { Login } from '../pages/Session/Login';
import { Recovery } from '../pages/Session/Recovery';
import { Registration } from '../pages/Session/Registration';
import { PrivateRoutes } from './PrivateRoutes';

export const Router = () => {
  return (
    <Routes>
      <Route path="/sessao" element={<SessionDefaultLayout />}>
        <Route path="acessar" element={<Login />} />
        <Route path="cadastrar" element={<Registration />} />
        <Route path="recuperar" element={<Recovery />} />
      </Route>

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/perfil" element={<Profile />} />

          <Route path="/grupos" element={<Groups />} />
          <Route path="/grupos/:groupId/" element={<Group />} />

          <Route path="/grupos/:groupId/:examId/" element={<GroupExam />} />

          <Route
            path="/grupos/:groupId/:examId/:answerId/"
            element={<MemberExam />}
          />

          <Route
            path="/grupos/:groupId/:examId/imprimir"
            element={<PrintExam />}
          />

          <Route path="/preferencias" element={<PreferencesDefaultLayout />}>
            <Route path="/preferencias" element={<Navigate to="geral" />} />
            <Route path="geral" element={<General />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
