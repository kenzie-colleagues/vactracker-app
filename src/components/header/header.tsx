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
    <div className="bg-blue-100">
  <div className="container mx-auto px-6">
    <header className="flex flex-wrap justify-between items-center py-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="flex items-center mt-3 sm:mt-0">
          <img
            src={Logo}
            alt="Logo"
            className="h-6 sm:h-80p mr-4 object-contain"
          />
          <span className="text-green-600 text-base sm:text-2xl md:text-4xl font-bold">
            VacTracker
          </span>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-center">
        {showRegisterButton && (
          <Link to="/login" className="sm:w-1/2">
            <Button
              variant="contained"
              color="primary"
              className="w-full"
              sx={{
                fontSize: "16px",
                "@media (max-width: 769px)": {
                  fontSize: "10px",
                },
                backgroundColor: "#87BF9A",
                "&:hover": {
                  backgroundColor: "#87BF9A",
                },
              }}
            >
              LOGIN
            </Button>
          </Link>
        )}
        {showLoginButton && (
          <Link to="/register" className="sm:w-1/2">
            <Button
              variant="contained"
              color="primary"
              className="w-full"
              sx={{
                fontSize: "16px",
                "@media (max-width: 769px)": {
                  fontSize: "10px",
                },
                backgroundColor: "#87BF9A",
                "&:hover": {
                  backgroundColor: "#87BF9A",
                },
              }}
            >
              Cadastro
            </Button>
          </Link>
        )}
        <Link to="/" className="sm:w-1/2">
          <Button
            variant="contained"
            color="primary"
            className="w-full"
            sx={{
              fontSize: "16px",
              "@media (max-width: 769px)": {
                fontSize: "10px",
              },
              backgroundColor: "#87BF9A",
              "&:hover": {
                backgroundColor: "#87BF9A",
              },
            }}
          >
            HOME
          </Button>
        </Link>
      </div>
    </header>
  </div>
</div>
  );
};
export default Header;