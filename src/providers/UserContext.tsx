import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../services/Axios/axios";
import { toast } from "react-toastify";
import { IAxiosError } from "./TechContext";
import { AxiosError } from "axios";

interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContext {
  Login(data: any): Promise<void>;
  Signup(data: any): Promise<void>;
  loggedUser: ILoggedUser | null;
  loading: boolean;
  logout: () => void;
  userTechs: Itech[];
  setUserTechs: React.Dispatch<React.SetStateAction<Itech[]>>;
}

export interface Itech {
  id: string;
  title: string;
  status: string;
}

interface ILoggedUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: Itech[];
}

export interface ISignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IloginData {
  email: string;
  password: string;
}

export const UserContext = createContext({} as IUserContext);

const Providers = ({ children }: IUserContextProps) => {
  const navigation = useNavigate();
  const [loggedUser, setLoggedUser] = useState<ILoggedUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [userTechs, setUserTechs] = useState([] as Itech[]);

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");

    async function loadUser() {
      if (token) {
        try {
          const { data } = await instance.get("/profile");

          setLoggedUser(data);
          setUserTechs(data.techs);
        } catch (error) {
          localStorage.clear();
          console.log(error);
          const requestError = error as AxiosError<IAxiosError>;
          toast.error(requestError.message);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  async function Login(data: IloginData) {
    try {
      const response = await instance.post("/sessions", data);

      const { user: loggedUserResponse, token } = response.data;

      setLoggedUser(loggedUserResponse);

      localStorage.setItem("@KenzieHub:token", token);

      toast.success("Login Realizado com Sucesso!");

      navigation("/HomePage", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu Errado!");
    }
  }

  async function Signup(data: ISignupData) {
    await instance
      .post("/users", data)
      .then((resp) => {
        console.log(resp);
        toast.success("Registro criado com sucesso!");
        navigation("/");
      })

      .catch((error) => {
        console.log(error);
        toast.error("Ops, aldo deu errado!");
      });
  }

  function logout() {
    localStorage.clear();
    navigation("/");
  }

  return (
    <UserContext.Provider
      value={{
        Login,
        Signup,
        loggedUser,
        loading,
        logout,
        userTechs,
        setUserTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;
