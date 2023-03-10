import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/header/header";
import InputComponent from "../../components/input/Input";
import { IUserLoginFormValues } from "../../providers/@types";
import { UserContext } from "../../providers/UserContext";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginFormValues>();

  const { userLogin } = useContext(UserContext);

  const submit = (data: IUserLoginFormValues) => {
    userLogin(data);
  };

  return (
    <>
      <Header showLoginButton />
      <div className="w-full max-w-xs md:max-w-lg mx-auto mt-4 mb-8">
        <h3 className="px-6 text-lg md:text-2xl text-center font-bold">
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
          </div>
          <div className="flex flex-col mb-4">
            <InputComponent
              label="Seu password"
              type="password"
              register={register("password")}
              error={errors.password?.message}
              placeholder="Password"
            />
          </div>
          <div className="flex">
            <div className="flex-1">
              <Button
                variant="contained"
                color="primary"
                className="w-full"
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
