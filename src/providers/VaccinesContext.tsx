import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { VaccinesProviderProps } from "./@types";

const VaccinesContext = createContext();

const VaccinesProvider = ({ children }: VaccinesProviderProps) => {
  const [vaccines, setVaccines] = useState();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("@TOKEN");

  const loadVaccines = async () => {
    try {
     setLoading(true)
      const response = await api.get("vaccines", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVaccines(response.data);
    } catch (error) {
        toast.error('Erro ao carregar os produtos')
    } finally{
        setLoading(false)
    }
  };

  const usersVaccines = async(data)=>{
    try {
        await api.post('userVaccines', data)
        toast.success("Produto adicionado ao carrinho!")
    } catch (error) {
        toast.error("Erro ao adicionar ao carrinho")
    }
  }

  return <div>VaccinesContext</div>;
};

export default VaccinesProvider;
