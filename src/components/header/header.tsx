import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type HeaderProps = {
  showRegisterButton?: boolean;
  showLoginButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  showRegisterButton,
  showLoginButton,
}) => {
  return (
    <header>
      {showRegisterButton && (
        <Link to="/register">
          <Button>Cadastro</Button>
        </Link>
      )}
      {showLoginButton && (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      )}
      <Button>Voltar</Button>
    </header>
  );
};

export default Header;

