import React from "react";
import {useContext} from "react"
import { FooterHomePage } from "../../components/FooterHome";
import { HeaderHomePage } from "../../components/HeaderHome";
import Home from "../../assets/Home.png";

const HomePage = () => {



  return (
    <>
      <HeaderHomePage />

      <div>
        <img src={Home} alt="" />
        <h1>Vacinas Disponíveis para Compra</h1>
        <div>
          <ul>




          </ul>
        </div>
      </div>

      <FooterHomePage />
    </>
  );
};

export default HomePage;
