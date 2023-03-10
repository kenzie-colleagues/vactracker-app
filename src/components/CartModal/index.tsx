import React, { useState } from "react";
import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
//import { CartModalProps } from "../../providers/@types";  CONFIRMAR COM MARI 
import { useContext } from "react";

{/*Verificar oande por exportação abaixo com a Mari*/}
export interface CartModalProps  {
    onClose: () => any
    }

const modalBody =  ({ onClose }: CartModalProps) =>  { // recebe a função onClose como prop, porém confirmar ocm Mari
  
  return (
      <dialog>

        <header>
           <h2>Carrinho de Compras</h2> 
          <button type="button" aria-label="Fechar" onClick={onClose} > {/* adiciona a função de fechar o modal */}
            <MdClose />
          </button>
        </header>

        <div>/{/* div que abre ala para os card da vacina*/}
          <CartProductList />
        </div>
      </dialog>
  );
};
export default modalBody






