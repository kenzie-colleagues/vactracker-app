import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import {
  IRenderUserVaccine,
  IUsersVaccines,
  IVaccines,
  IVaccinesContext,
  loadVaccines,
  VaccinesProviderProps,
} from "./@types";
import { CartContext } from "./CartContext/CartContext";

export const VaccinesContext = createContext<IVaccinesContext>({} as IVaccinesContext);

const VaccinesProvider = ({ children }: VaccinesProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [vaccines, setVaccines] = useState<IVaccines[]>([]);
  const token = localStorage.getItem("@TOKEN");
  const [renderVaccines, setRenderVaccines] = useState<IRenderUserVaccine[]>();

  const localVaccinesUserCard = localStorage.getItem("@VACCINESUSER");
  const [vaccinesCardUser, setVaccinesCardUser] = useState(
    localVaccinesUserCard ? JSON.parse(localVaccinesUserCard) : []
  );
  const {shoppingCartList, setShoppingCartList} = useContext(CartContext)


  useEffect(() => {
    const loadVaccines: loadVaccines = async () => {
      try {
        setLoading(true);
        const response = await api.get<IVaccines[]>("vaccines", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setVaccines(response.data);
      } catch (error) {
        toast.error("Erro ao carregar os produtos");
      } finally {
        setLoading(false);
      }
    };
    loadVaccines();
  }, []);

  useEffect(() => {
    localStorage.setItem("@VACCINESUSER", JSON.stringify(vaccinesCardUser));
  }, [vaccinesCardUser]);

  const addVaccineUser = () => {
    toast.success(`As vacinas foram agendadas com sucesso`);
    if (vaccinesCardUser) {
      setVaccinesCardUser([...vaccinesCardUser, ...shoppingCartList]);
      setShoppingCartList([])
    }
   else {
    toast.error(
      `As vacinas já foram agendadas`
    );
  }

};

  const usersVaccines = async (data: IUsersVaccines) => {
    try {
      await api.post("userVaccines", data);
      toast.success("Produto adicionado ao carrinho!");
    } catch (error) {
      toast.error("Erro ao adicionar ao carrinho");
    }
  };

  const renderUserVaccines = async (
    userId: number,
    data: IRenderUserVaccine
  ) => {
    try {
      const response = await api.get(`users/${userId}`, data);
      setRenderVaccines(response.data);
      toast.success("Compra finalizada com sucesso!");
    } catch (error) {
      toast.error("Tente novamente!");
    }
  };
  

  return (
    <VaccinesContext.Provider
      value={{
        loading,
        vaccines,
        setVaccines,
        setRenderVaccines,
        renderVaccines,
        vaccinesCardUser,
        setVaccinesCardUser,
        addVaccineUser
      }}
    >
      {children}
    </VaccinesContext.Provider>
  );
};

export default VaccinesProvider;
