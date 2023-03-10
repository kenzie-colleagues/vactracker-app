import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

type HeaderProps = {
  showRegisterButton?: boolean;
  showLoginButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  showRegisterButton,
  showLoginButton,
}) => {
  return (
    <header className="bg-blue-100 sm:h-87 flex flex-wrap justify-between items-center py-4 px-6">
  <div className="flex items-center mb-4 sm:mb-0">
    <img
      src={Logo}
      alt="Logo"
      className="h-6 sm:h-80p mr-4 object-contain"
    />
    <span className="text-green-600 text-4xl sm:text-5xl font-bold h-60p sm:h-80p text-3xl sm:text-4xl sm:h-60p">
  VacTracker
</span>

  </div>
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    {showRegisterButton && (
      <Link to="/register">
        <Button
          variant="contained"
          color="primary"
          className="w-full sm:w-auto"
          style={{ backgroundColor: "#87BF9A" }}
        >
          Login
        </Button>
      </Link>
    )}
    {showLoginButton && (
      <Link to="/login">
        <Button
          variant="contained"
          color="primary"
          className="w-full sm:w-auto"
          style={{ backgroundColor: "#87BF9A" }}
        >
          Cadastro
        </Button>
      </Link>
    )}
    <Button
      variant="contained"
      color="primary"
      className="w-full sm:w-auto"
      style={{ backgroundColor: "#87BF9A" }}
    >
      Voltar
    </Button>
  </div>
</header>

  );
};

export default Header;
