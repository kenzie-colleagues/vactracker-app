import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/header/header";
import InputComponent from "../../components/input/Input";
import { IUserRegisterFormValues } from "../../providers/@types";
import { UserContext } from "../../providers/UserContext";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterFormValues>();

  const { userRegister } = useContext(UserContext);

  const submit = (data: IUserRegisterFormValues) => {
    userRegister(data);
  };

  return (
    <>
      <Header showRegisterButton />
      <div className="flex flex-col mx-auto my-auto">
        <h3 className="px-6 text-lg md:text-2xl text-center mt-4 mb-8 font-bold">
          Cadastrar
        </h3>

        <form onSubmit={handleSubmit(submit)}>
          <div className="grid gap-4">
            <InputComponent
              label="Seu email"
              placeholder="Seu email"
              type="email"
              register={register("email")}
              error={errors.email?.message}
            />
            <InputComponent
              label="Seu password"
              type="password"
              register={register("password")}
              error={errors.password?.message}
              placeholder="Password"
            />
            <InputComponent
              label="Confirme o seu password"
              type="password"
              register={register("confirmPassword")}
              error={errors.confirmPassword?.message}
              placeholder="Confirme seu password"
            />
            <InputComponent
              label="Seu nome"
              type="text"
              register={register("name")}
              error={errors.name?.message}
              placeholder="Digite o seu nome"
            />
            <InputComponent
              label="Data de Nascimento"
              type="text"
              register={register("dateOfBirth")}
              error={errors.dateOfBirth?.message}
              placeholder="Data de Nascimento"
            />
            <InputComponent
              label="CPF"
              type="text"
              register={register("CPF")}
              error={errors.CPF?.message}
              placeholder="CPF"
            />
          </div>
          <div className="w-full max-w-xs md:max-w-lg mx-auto mt-4 mb-8">
            <div className="flex">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full"
                sx={{
                  backgroundColor: "#87BF9A",
                  "&:hover": {
                    backgroundColor: "#87BF9A",
                  },
                }}
              >
                Cadastro
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
