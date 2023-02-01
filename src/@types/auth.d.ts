export interface RegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginProps {
  email: string;
  password: string;
  keepSession: boolean;
  recaptcha: string | null;
}

export interface User {
  name: string;
  email: string;
  password: string;
  avatar: string | null;
}
