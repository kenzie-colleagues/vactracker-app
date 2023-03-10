import { useContext } from "react";
import { IProductsProps } from "../../../providers/CartContext/@typesCart";
import { CartContext } from "../../../providers/CartContext//CartContext";

const ProductCard = ({ product }: IProductsProps) => {
  const { addCartShopping } = useContext(CartContext);
  return (
    <li>
      <div>
        <img src={`${product.img}`} alt="Vacinas" />
      </div>
      <div>
        <h3>
          {`${product.name}`}
        </h3>
        <p >{`${product.information}`}</p>
        <p>{`${product.date}`}</p>
        <p>{`${product.price}`}</p>
        <button
          onClick={() => addCartShopping(product)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
export default ProductCard;
