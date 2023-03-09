import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../../../providers/CartContext/CartContext";
import { IProductsProps } from "../../../../providers/CartContext/@typesCart";

const CartProductCard = ({ product }: IProductsProps) => {
  const { removeCartShopping } = useContext(CartContext);

  return (
    <li>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <button
          type="button"
          aria-label="Remover"
          onClick={() => removeCartShopping(product.id)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </li>
  );
};

export default CartProductCard;
