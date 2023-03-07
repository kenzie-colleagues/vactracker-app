import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify/dist/core";
import api from "../services/api";
import {
  IUser,
  IUserContextData,
  IUserLoginFormValues,
  IUserProviderProps,
  IUserRegisterFormValues,
  UserAutoLoginFunction,
} from "./@types";

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const userRegister = async (data: IUserRegisterFormValues) => {
    try {
      await api.post("register", data);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    }
  };

  const userLogin = async (data: IUserLoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("login", data);
      setUser(response.data.users);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      toast.success("Bem-vindo!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Dados inválidos, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  const userAutoLogin: UserAutoLoginFunction = () => {
    const token: string | null = localStorage.getItem("@TOKEN");
    if (token) {
      navigate("dashboard");
    } else {
      localStorage.removeItem("@TOKEN");
      navigate("/");
    }
  };

  useEffect(() => {
    userAutoLogin();
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
