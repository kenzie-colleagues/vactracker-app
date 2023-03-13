import { useEffect, useState } from "react";
import FooterHomePage from "../../components/FooterHome";
import Home from "../../assets/Home.png";
import { IVaccines } from "../../providers/@types";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import CardOff from "../../components/ProductsList/CardHome";
import Header from "../../components/header/header";
const HomePage = () => {
  const [list, setList] = useState<IVaccines[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const listproduct = async () => {
      try {
        const response = await api.get<IVaccines[]>("vaccines");
        setList(response.data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    listproduct();
  }, []);
  return (
    <>
      <Header showLoginButton showRegisterButton showHomeButton={false} />

      <div className="flex">
        <img src={Home} alt="fotocriança" className="w-1/2 max-h-700 " />
        <section>
          <h1 className="mt-6 justify-center mb-10 text-xl text-center text-emerald-700 sm:text-lg">
            Lista de vacinas
          </h1>

          <div className="max-h-300 overflow-y-auto">
            <ul className="flex flex-wrap max-h-600 overflow-x-auto max-w-[200px] sm:max-w-full">
              {list.map(
                (product: IVaccines) =>
                  product.name && <CardOff key={product.id} product={product} />
              )}
            </ul>
          </div>
        </section>
      </div>
      <FooterHomePage />
    </>
  );
};
export default HomePage;
