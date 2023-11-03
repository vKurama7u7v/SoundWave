import { createContext } from "react";

const AuthContext = createContext({
  auth: false,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null,
});

export default AuthContext;
