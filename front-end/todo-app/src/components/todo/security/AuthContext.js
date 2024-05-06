import { createContext, useContext, useState } from "react";

//create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//put some state in a context
//share created context with other components
export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  //const valueToBeShared = {number, isAuthenticated, setAuthenticated} //returns valueToBeShared{number:10, isAuthenticated:false, setAuthenticated: function}
  //setInterval( () => setNumber(number+1), 10000)

  function login(username, password) {
    if (username === "in28minutes" && password === "dummy") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }
  function logout() {
    setAuthenticated(false);
  }
  return (
    //giving other components access to values
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
