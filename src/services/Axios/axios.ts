import axios from "axios";

const Token = localStorage.getItem("@KenzieHub:token");

export const instance = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Token}`,
  },
});
