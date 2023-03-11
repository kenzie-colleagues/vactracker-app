import { useContext } from "react";
import CartProductCard from "./CartProductCard";

import { IVaccines } from "../../../providers/@types";
import { CartContext } from "../../../providers/CartContext/CartContext";

const CartProductList = () => {
  const { shoppingCartList, valueCart, removeAllItens } =
    useContext(CartContext);

  return (
    <div>
      <ul>
        {shoppingCartList.map(
          (product: IVaccines) =>
            product.name && (
                <CartProductCard key={product.id} product={product} />
            )
        )}
      </ul>

      <div>
        <p>
          <strong>Total</strong>
        </p>
        <p>R$ {valueCart.toFixed(2)}</p>
      </div>
      <button onClick={() => removeAllItens()}>Remover todos</button>
    </div>
  );
};

export default CartProductList;
