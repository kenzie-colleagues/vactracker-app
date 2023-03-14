import { useContext } from "react";
import { IProductsProps } from "../../../providers/CartContext/@typesCart";
import { CartContext } from "../../../providers/CartContext//CartContext";
import Logo from "../../../assets/Logo.png";

const ProductCard = ({ product }: IProductsProps) => {
  const { addCartShopping } = useContext(CartContext);
  return (
    <li className="w-full rounded-lg bg-white  outline-gray-600 shadow-2xl p-3 flex flex-col gap-3  ">
      <div>
        <img src={`${product.img}`} alt="Vacinas"  className="w-full center rounded-lg"/>
      </div>
      <div className="gap-1">
        <h3 className="text-base text-green-600 font-medium text-center">
          {`${product.name}`}
        </h3>
        {/*<p >{`${product.information}`}</p>*/}
        {/* <p>{`${product.date}`}</p>*/ }
        <p className="text-center text-zinc-200 bg-green-600">{`${product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}</p>
       <div className="flex justify-center"> 
        <img src={Logo}  className="object-scale-down h-8 w-6"/>
        <button className="  "
          onClick={() => addCartShopping(product)}
        >
          Adicionar ao Carrinho
        </button>
        </div>
       
      </div>
    </li>
  );
};
export default ProductCard;



