import { ReactNode } from "react";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserRegisterFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  dateOfBirth: string;
  CPF: string;
}

export interface IUserLoginFormValues {
  email: string;
  password: string;
}

export type UserAutoLoginFunction = () => void;

export interface IUserContextData {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    user: IUser | null;
    userRegister: (data: IUserRegisterFormValues) => Promise<void>;
    userLogin: (data: IUserLoginFormValues) => Promise<void>;
    userLogout: () => void;
  }


