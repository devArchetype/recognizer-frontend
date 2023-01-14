import { ReactNode, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RegisteredUsers } from '../@types/app';
import { LoginProps, RegisterProps } from '../@types/auth';
import { useLocalStorage } from '../hooks/useStorage';

interface AuthContextType {
  authenticated: boolean;
  registerUser: ({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterProps) => void;
  login: ({ email, password, isNew }: LoginProps) => boolean;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);

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
      login({ email, password, isNew: true });
    }
  };

  const login = ({ email, password, isNew }: LoginProps) => {
    const registered = registeredUsers[email];

    if ((registered && registered.password === password) || isNew) {
      setAuthenticated(true);
      navigate('/grupos');
      toast.info('Bem vindo!');
    } else {
      toast.error('Insira email e senha válidos');
    }
    return authenticated;
  };

  const logout = () => {
    setAuthenticated(false);
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
