import React from "react";
import { Button } from "@mui/material";
import { Event } from "react-toastify/dist/core";

type HeaderProps = {
  showRegisterButton?: boolean,
  showLoginButton?: boolean,
  // onButtonClick recebe um evento de clique em um botao, e nao retorna nada((event: React.MouseEvent<HTMLButtonElement>) => void;)
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
};

const Header: React.FC<HeaderProps> = ({
  showRegisterButton,
  showLoginButton,
  onButtonClick,
}) => {
  const handleRegisterClick = () => {
    if (onButtonClick) {
      onButtonClick(event);
    }
  };

  const handleLoginClick = () => {
    if (onButtonClick) {
      onButtonClick(event);
    }
  };

  return (
    <header>
      {showRegisterButton && (
        <Button onClick={handleRegisterClick}>Cadastro</Button>
      )}
      {showLoginButton && <Button onClick={handleLoginClick}>Login</Button>}
      <Button>Voltar</Button>
    </header>
  );
};

export default Header;
