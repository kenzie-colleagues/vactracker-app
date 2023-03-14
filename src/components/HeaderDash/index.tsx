import { MdShoppingCart, MdLogout } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { CartContext } from "../../providers/CartContext/CartContext";
import Logo from "../../assets/Logo.png";
import Dashboard from "../../assets/Dashboard.png";
import SearchForm from "./Search";

const HeaderDash = () => {
  const { userLogout } = useContext(UserContext);
  const { modalCartShoppingList, setModalCartShoppingList } =
    useContext(CartContext);

  const handleOpenCartModal = () => {
    setModalCartShoppingList(true); // abre o modal
  };

  return (
    <div className="w-full">
      <header className=" bg-[#DCF1FA] h-80px flex justify-around ">

        <div className="w-2/6 flex items-center justify-center  ">
          <img src={Logo} alt="Logo" className=" " />
          <span className="text-green-600 text-base sm:text-2xl md:text-4xl font-bold">
            VacTracker
          </span>
        </div>

        <div className="w-2/6 flex items-center justify-center flex-row">
          <SearchForm />
        </div>

        <div className=" w-2/6 flex items-center justify-center gap-10">
          <button className="" type="button" onClick={handleOpenCartModal}>
            <MdShoppingCart className="" />
          </button>
          <button
            className=""
            type="button"
            onClick={() => {
              userLogout();
            }}
          >
            <MdLogout className="" />
          </button>
        </div>

      </header>

      <div>
        <img src={Dashboard} className="w-full" />
      </div>
    </div>
  );
};
export default HeaderDash;
