import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export const HeaderHomePage = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="" />
        <h2>VacTracker</h2>
      </div>

      <nav>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Cadastre-se</Link>
      </nav>
    </header>
  );
};
