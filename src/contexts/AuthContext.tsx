import { ReactNode, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  authenticated: boolean;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
