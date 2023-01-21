import { ReactNode, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RegisteredUsers } from '../@types/app';
import { LoginProps, RegisterProps } from '../@types/auth';
import { useLocalStorage } from '../hooks/useStorage';
import { recognizerApi } from '../services/axios/instances';

interface AuthContextType {
  authenticated: boolean;
  registerUser: ({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterProps) => void;
  login: ({ email, password }: LoginProps) => boolean;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [registeredUsers, setRegisteredUsers] =
    useLocalStorage<RegisteredUsers>('registeredUsers', {});

  const navigate = useNavigate();

  const registerUser = ({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterProps) => {
    const registered = registeredUsers[email];

    if (registered) {
      toast.error('O email inserido já está em uso!');
    } else {
      setRegisteredUsers((prevState) => ({
        ...prevState,
        [email]: {
          id: '',
          name,
          email,
          password,
        },
      }));
      navigate('/sessao/cadastrar');
      toast.info('Usuário Cadastrado!');
      // login({ email, password, keepSession: false, isNew: true });
    }
  };

  const login = ({ email, password }: LoginProps) => {
    (async () => {
      const {
        data: { user, token, message },
      } = await recognizerApi.post('/user/login', { email, password });

      if (message) {
        toast.error(
          message || 'Ops, algum erro aconteceu! Tente novamente mais tarde.'
        );
      } else {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
        recognizerApi.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);

        navigate('/grupos');
        toast.info('Bem vindo!');
      }
    })();

    return authenticated;
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    recognizerApi.defaults.headers.Authorization = null;
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, registerUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
