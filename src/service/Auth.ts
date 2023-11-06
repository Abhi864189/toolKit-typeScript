import axios from "axios";

export const authLogin = async () => {
  return await axios.get("https://fakestoreapi.com/auth/login");
};
