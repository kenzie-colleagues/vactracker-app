import { useContext } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "../../providers/CartContext/CartContext";
import { IVaccines } from "../../providers/@types";

const ProductList = () => {
  const { searchMenuList } = useContext(CartContext);
  return (
    <ul className="grid grid-cols-2 gap-5 xxl:grid-cols-4 lg:grid-cols-3 " >
      {searchMenuList.map((product: IVaccines) => product.name && <ProductCard key={product.id} product={product} />
      )}
    </ul>
  );
};
export default ProductList;
