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
  isNew?: boolean;
}
