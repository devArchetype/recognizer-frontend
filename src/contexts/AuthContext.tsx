import { ReactNode, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginProps, RegisterProps, User } from '../@types/auth';
import { useLocalStorage } from '../hooks/useStorage';
import { recognizerApi } from '../services/axios/instances';

interface AuthContextType {
  user: User;
  authenticated: boolean;
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

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useLocalStorage(
    'authenticated',
    false
  );
  const [user, setrUser] = useLocalStorage('user', {});
  const [token, setToken] = useLocalStorage('token', '');
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
      data: { sucess, message },
    } = await recognizerApi.post('/user/store', {
      name,
      email,
      password,
    });

    if (message) {
      toast.error(
        message || 'Ops, algum erro aconteceu! Tente novamente mais tarde.'
      );
    } else if (sucess) {
      navigate('/sessao/acessar');
      toast.info(sucess);
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
          setrUser(user);
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
    setrUser({});
    setAuthenticated(false);

    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{ user, authenticated, registerUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
