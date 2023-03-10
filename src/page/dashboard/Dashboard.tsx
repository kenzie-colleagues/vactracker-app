import { useContext } from 'react';
import HeaderDash from '../../components/HeaderDash';
import CartModal from '../../components/CartModal';

import { CartContext }  from '../../providers/CartContext/CartContext';
const ShopPage = () => {
  const { modalCartShoppingList } = useContext(CartContext);
  return (
    <div>
      {modalCartShoppingList ? <CartModal /> : null}
      <HeaderDash />
      <main>
        <div >
       {/* renderizar lista de produtos */} 
        </div>
      </main>
    </div>
  );
};
export default ShopPage;