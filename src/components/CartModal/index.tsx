import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';
import { CartContext } from '../../providers/CartContext/CartContext';


const CartModal = () => {
  const { setModalCartShoppingList, shoppingCartList } = useContext(CartContext);
  return (
<div>
<dialog>
        <header>
          <h2>
            Carrinho de Compras
            </h2>
          
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => setModalCartShoppingList(false)}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          {shoppingCartList.length > 0 ? (
            <CartProductList />
          ) : (
            <div className='emptyBox'>
              <h3>
                Sua sacola está vazia
              </h3>
              <p>
                Adicione itens
              </p>
            </div>
          )}
        </div>
      </dialog>

</div>
  

  );
};
export default CartModal;










/*import React, { useState } from "react";
import ReactModal from "react-modal";
import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext/CartContext";


export interface CartModalProps  {
    onClose: () => any
    }

const modal =  ({ onClose }: CartModalProps) =>  { // recebe a função onClose como prop, porém confirmar ocm Mari

const {shoppingCartList } = useContext(CartContext);

  return (
      <div>
        <header>
           <h2>Carrinho de Compras</h2> 
          <button type="button" aria-label="Fechar" onClick={onClose} > {/* adiciona a função de fechar o modal *
       /*     <MdClose />
          </button>
        </header>

        <div className='cartBox'>
          {shoppingCartList.length > 0 ? (
            <CartProductList />
          ) : (
            <div className='emptyBox'>
              <h3>
                Sua sacola está vazia
              </h3>
              <p>
                Adicione itens
              </p>
            </div>
          )}
        </div>
      </div>
  );
};
export default modalBody


*/



