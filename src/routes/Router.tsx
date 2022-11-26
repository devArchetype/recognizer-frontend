import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Exam } from '../pages/Exam';
import { Groups } from '../pages/Groups';
import { NotFound } from '../pages/NotFound';
import { PreferencesDefaultLayout } from '../pages/Preferences';
import { General } from '../pages/Preferences/pages/General';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/grupos" />} />
        <Route path="/grupos" element={<Groups />} />

        {/* for viewing and testing only */}
        <Route
          path="/exam"
          element={<Exam examName="Prova A" examined="Joãozinho Batata" />}
        />

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
