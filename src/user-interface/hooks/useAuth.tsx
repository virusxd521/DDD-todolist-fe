import React, { useEffect, useState } from "react";
import { UserService } from "@/infrastructure/api/userService";
import { useNavigate } from "react-router-dom";

interface UserServiceInterface {
  register: (username: string, email: string, password: string) => Promise<any>;
  // getInstance: any;
}

const routes = {
  userProfile: "user/blaaa",
};

const UseAuth = () => {
  const [response, setResponse] = useState<any>([]);
  const navigate = useNavigate();
  const userService = UserService.getInstance();

  useEffect(() => {}, [response]);

  // register
  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    const result = await userService.register(username, email, password);
    if (result === 201) {
      // TODO: need to be based on boolean or something
      console.log("we made it!!!");
      navigate(routes.userProfile);
    } else {
      console.log("Dude");
    }
  };

  // Login
  const login = async () => {};

  // Logout
  const logout = async () => {};

  return [register, login, logout];
};

export default UseAuth;

// import { useContext, useDebugValue } from "react";
// import AuthContext from "../context/AuthProvider";

// const useAuth = () => {
//   const { auth } = useContext(AuthContext);
//   useDebugValue(auth, (auth) => (auth?.user ? "Logged In" : "Logged Out"));
//   return useContext(AuthContext);
// };

// export default useAuth;
