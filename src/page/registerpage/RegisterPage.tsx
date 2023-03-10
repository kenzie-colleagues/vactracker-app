import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/header/header";
import InputComponent from "../../components/input/Input";

const RegisterPage = () => {

  const {register, handleSubmit, formState:{errors}} = useForm()

  return (
    <>
      <Header showRegisterButton />

      <InputComponent label="Seu nome" type='text' {register('name')} error={error.name} />
      {errors.name}
    </>
  );
};
export default RegisterPage;
