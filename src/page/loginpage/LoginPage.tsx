import React from "react";
import Header from "../../components/header/header";
import InputComponent from "../../components/input/Input";

const LoginPage = () => {
  
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    
  };
  return(
    <>
    <Header showRegisterButton onButtonClick={(event) => handleButtonClick(event)}  />
  
  <form>
    <InputComponent />
    <InputComponent />
  </form>;
  </>
  )
};

export default LoginPage;
