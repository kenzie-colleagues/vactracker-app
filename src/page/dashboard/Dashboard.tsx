import React from "react";

import { useContext } from "react";
import HeaderDash from "../../components/HeaderDash";
import CartModal from "../../components/CartModal";
import ProductList from "../../components/ProductsList";
import { CartContext } from "../../providers/CartContext/CartContext";
import VaccinesUser from "../../components/VaccinesUser";
import FooterHomePage from "../../components/FooterHome";

const Dashboard = () => {
  const { modalCartShoppingList } = useContext(CartContext);

  return (
    <div className="w-full h-full " >
      <HeaderDash />      
      <main className="w-full flex sm	flex-col md:flex-row ">
        <div className="w-full md:max-w-md">
        <VaccinesUser/>
        </div >
        <aside className="w-full p-8 " >
        <ProductList />
        </aside>
      {modalCartShoppingList ? <CartModal /> : null}
      </main>
      <FooterHomePage/>
      
    </div>
  );
};

export default Dashboard;
