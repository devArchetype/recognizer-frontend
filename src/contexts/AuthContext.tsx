import { ReactNode, createContext, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginProps, RegisterProps, User } from '../@types/auth';
import { useLocalStorage } from '../hooks/useStorage';
import { recognizerApi } from '../services/axios/instances';
import { Group } from '../@types/app';

interface AuthContextType {
  user: User;
  setUser: (user: User) => void;
  authenticated: boolean;
  membersExamPrint: Member[];
  setMembersExamPrint: (members: Member[]) => void;
  groups: Group[];
  setGroups: (members: Group[]) => void;
  registerUser: ({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterProps) => void;
  login: ({ email, password, keepSession, recaptcha }: LoginProps) => boolean;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

type DecodedToken = {
  exp: number;
};

type Member = {
  id: string;
  name: string;
  externalId?: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useLocalStorage(
    'authenticated',
    false
  );
  const [user, setUser] = useLocalStorage('user', {} as User);
  const [token, setToken] = useLocalStorage('token', '');
  const [membersExamPrint, setMembersExamPrint] = useLocalStorage<Member[]>(
    'membersExamPrint',
    []
  );
  const [groups, setGroups] = useLocalStorage<Group[]>('groups', []);

  // const [hashKeepSession, sethashKeepSession] = useLocalStorage(
  //   'hashKeepSession',
  //   ''
  // );

  recognizerApi.defaults.headers.Authorization = `Bearer ${token}`;
  // recognizerApi.defaults.headers.hashKeepSession = hashKeepSession;

  const navigate = useNavigate();

  const registerUser = async ({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterProps) => {
    if (password !== confirmPassword) {
      toast.error('Senhas incompatíveis!');
      return;
    }

    const {
      data: { success, message },
    } = await recognizerApi.post('/user/store', {
      name,
      email,
      password,
    });

    if (message) {
      toast.error(
        message || 'Ops, algum erro aconteceu! Tente novamente mais tarde.'
      );
    } else if (success) {
      navigate('/sessao/acessar');
      toast.info(success);
    }
  };

  const login = ({ email, password, keepSession, recaptcha }: LoginProps) => {
    if (recaptcha) {
      (async () => {
        const {
          data: { user, token, message },
        } = await recognizerApi.post('/user/login', {
          email,
          password,
          keepSession,
          recaptcha,
        });

        if (message) {
          toast.error(
            message || 'Ops, algum erro aconteceu! Tente novamente mais tarde.'
          );
        } else {
          setToken(token);
          // sethashKeepSession(hashKeepSession);
          setUser(user);
          setAuthenticated(true);

          navigate('/grupos');
          toast.info('Bem vindo!');
        }
      })();
    } else {
      toast.error('ReCAPTCHA inválido');
    }

    return authenticated;
  };

  const logout = () => {
    setToken('');
    // sethashKeepSession('');
    setUser({} as User);
    setAuthenticated(false);

    toast.warning('Sessão Encerrada!');
    navigate('/');
  };

  // checks if the token has expired
  useEffect(() => {
    const JWT_PASS = import.meta.env.VITE_JWT_PASS;

    if (authenticated && JWT_PASS) {
      const decodedToken: DecodedToken = jwt_decode(token);
      const currentDate = new Date();

      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        logout();
      }
    }
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authenticated,
        registerUser,
        login,
        logout,
        membersExamPrint,
        setMembersExamPrint,
        groups,
        setGroups,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
