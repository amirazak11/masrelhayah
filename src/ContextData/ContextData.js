import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export let ContextData = createContext(0);

export function ContextDataProvider(props) {
  let [userData, setuserData] = useState(null);
  function saveUser() {
    let token = localStorage.getItem("token");
    let decoded = jwt_decode(token);
    setuserData(decoded);
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUser();
    }
  }, []);
  return (
    <ContextData.Provider value={{ saveUser, userData, setuserData }}>
      {props.children}
    </ContextData.Provider>
  );
}
export default ContextDataProvider;