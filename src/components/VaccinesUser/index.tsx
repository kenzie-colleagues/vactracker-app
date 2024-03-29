import React, { useContext, useState } from "react";
import { VaccinesContext } from "../../providers/VaccinesContext";
import VaccinesUserList from "./VaccinesUserList";

function VaccinesUser() {
  const {vaccinesCardUser} = useContext(VaccinesContext);

  return (
    <section className="mt-50 w-full border-b-4 md:border-r-4 h-full ">
      <header className="w-full flex justify-center items-center ">
        <h2 className=" text-center mb-10 mt-3 text-lg font-medium text-gray-900" >Caderneta de Vacinação</h2>
      </header>

      <div>
        {vaccinesCardUser.length > 0 ? (
          <VaccinesUserList/>
        ) : (
          <div className="w-full">
            <h3 className="flex item-center justify-center  w-full mt-1 text-sm text-center font-medium text-gray-700" >Você ainda não possui registro de vacina!</h3>
            <div>
              <p className="p-4 flex item-center justify-center w-full mt-1 text-sm font-medium text-center text-gray-600" >
              Caso precise de ajuda para adquirir nossas vacinas, entre em
              contato!
              </p>
            </div>
          </div>
        )}
      </div>
      </section>
  );
}

export default VaccinesUser;
