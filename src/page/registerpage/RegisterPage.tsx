import React from "react";
import Header from "../../components/header/header";
import InputComponent from "../../components/input/Input";

const LoginPage = () => {
  return (
    <>
      <Header showRegisterButton />
      <form>
        <InputComponent />
        <InputComponent />
      </form>
    </>
  );
};
export default LoginPage;
