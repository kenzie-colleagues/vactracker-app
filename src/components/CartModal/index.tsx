import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';
import { CartContext } from '../../providers/CartContext/CartContext';

const CartModal = () => {
  const {setModalCartShoppingList, shoppingCartList } = useContext(CartContext);

  return (
    <div>
      <div>
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

        <div>
          {shoppingCartList.length > 0 ? (

            <CartProductList />
          ) : (
            <div >
              <h3>
                Sua sacola está vazia
              </h3>
              <div>
                Adicione itens
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
