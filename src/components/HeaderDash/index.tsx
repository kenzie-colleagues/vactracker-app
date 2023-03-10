import React, { useContext, useState } from "react";
import { MdShoppingCart, MdLogout } from "react-icons/md";
import { UserContext } from "../../providers/UserContext";
import CartModal from "../CartModal";
import SearchForm from "./Search";


const HeaderDash = () => {
  const { userLogout } = useContext(UserContext);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // novo estado

  const handleOpenCartModal = () => {
    setIsCartModalOpen(true); // abre o modal
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false); // fecha o modal
  };

  return (
 
        <><div>
          <nav>
              <SearchForm />
              <div className="buttons">
                  <button type="button" onClick={handleOpenCartModal}> {/* adiciona a função de abrir o modal */}
                      <MdShoppingCart />
                  </button>
                  <button onClick={userLogout} type="button">
                      <MdLogout />
                  </button>
              </div>
          </nav>
      </div>
      <div>
      {/* renderiza o modal somente quando o estado isCartModalOpen for true */}
      {isCartModalOpen && <CartModal onClose={handleCloseCartModal} />}
      </div></>
  );
};

export default HeaderDash
