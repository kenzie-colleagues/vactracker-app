import { useContext } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "../../providers/CartContext/CartContext";
import { IVaccines } from "../../providers/@types";

const ProductList = () => {
  const { searchMenuList } = useContext(CartContext);
  return (
    <ul>
      {searchMenuList.map((product: IVaccines) => product.name && <ProductCard key={product.id} product={product} />
      )}
    </ul>
  );
};
export default ProductList;
