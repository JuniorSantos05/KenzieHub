import React, { createContext, useContext, useState } from "react";
import { instance } from "../services/Axios/axios";
import { Itech, UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface ITechProviderProps {
  children: React.ReactNode;
}

export interface IAxiosError {
  error: string;
}

interface ITechProvider {
  techCreate(data: Itech): Promise<void>;
  techDelete(id: string | number): Promise<void>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  techUpdate: () => void;
  closeModal: () => void;
}

export const TechContext = createContext({} as ITechProvider);

const TechProvider = ({ children }: ITechProviderProps) => {
  const { userTechs, LoadUser } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  async function techCreate(data: Itech) {
    try {
      const response = await instance.post("/users/techs", data);

      const { tech: techResponse, token } = response.data;
      userTechs.push(techResponse);

      toast.success("Nova Tech Cadastrada com Sucesso!");
      LoadUser();
      //setShowModal(false);
      window.location.reload();

      instance.defaults.headers.authorization = `Bearer ${token}`;
    } catch (error) {}
  }

  async function techDelete(id: string | number) {
    try {
      await instance.delete(`/users/techs/${id}`);

      toast.success("Tech foi deletada com sucesso");
      LoadUser();
    } catch (error) {
      const requestError = error as AxiosError<IAxiosError>;
      toast.error(requestError.message);
    }
  }

  function techUpdate() {
    console.log("UpDate");
  }

  function closeModal() {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }

  return (
    <TechContext.Provider
      value={{
        techCreate,
        techDelete,
        showModal,
        setShowModal,
        techUpdate,
        closeModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
