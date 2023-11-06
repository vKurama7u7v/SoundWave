import { createContext } from "react";

const AuthContext = createContext({
  auth: false,
  data_user: null,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null,
});

export default AuthContext;
