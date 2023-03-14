import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';
import { CartContext } from '../../providers/CartContext/CartContext';

const CartModal = () => {
  const {setModalCartShoppingList, shoppingCartList } = useContext(CartContext);

  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-blue-200/75 flex items-center justify-center w-full h-full'>
      <div className='bg-zinc-50 flex flex-col w-full max-w-lg'>
        <header className='flex justify-between items-center bg-green-400 p-5 '>
          <h2 className='font-semibold '>
            Carrinho de Compras
          </h2>
          <button className=' 
          '
            type='button'
            aria-label='Fechar'
            onClick={() => setModalCartShoppingList(false)}
          >
            <MdClose />
          </button>
        </header>

        <div className=' flex items-center text-center justify-center p-5'>
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
