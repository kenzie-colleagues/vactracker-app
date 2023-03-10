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
      <form onSubmit={handleSubmit(submit)}>
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
        <button type="submit">Cadastrar</button>
      </form>
      </div>
    </>
  );
};

export default RegisterPage;
