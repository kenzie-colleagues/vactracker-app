import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/header/header";
import InputComponent from "../../components/input/Input";
import { IUserLoginFormValues } from "../../providers/@types";
import { UserContext } from "../../providers/UserContext";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object().shape({
  email: yup.string().required('Email inválido').email('Email inválido'),
  password: yup.string().required("Senha Inválida"),
})

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginFormValues>({
    resolver: yupResolver(formSchema)
});

  const { userLogin } = useContext(UserContext);

  const submit = (data: IUserLoginFormValues) => {
    userLogin(data);
  };

  return (
    <>
      <Header showLoginButton />
      <div className="w-full max-w-xs md:max-w-lg mx-auto mt-4 mb-8">
        <h3 className="px-6 text-lg md:text-2xl text-center mt-4 mb-8 font-bold">
          Login
        </h3>
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col mb-4">
            <InputComponent
              label="Seu email"
              placeholder="Seu email"
              type="email"
              register={register("email")}
              error={errors.email?.message}
            />
            <span className="text-red-500" >{errors.email && errors.email.message}</span>
          </div>
          <div className="flex flex-col mb-4">
            <InputComponent
              label="Seu password"
              type="password"
              register={register("password")}
              error={errors.password?.message}
              placeholder="Password"
            />
            <span className="text-red-500" >{errors.password && errors.password.message}</span>
          </div>
          <div className="flex">
            <div className="flex-1">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full hover:bg-blue-700"
                style={{ backgroundColor: "#87BF9A" }}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginPage;


