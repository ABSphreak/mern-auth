import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  );
  console.log(user);
  console.log(isAuthenticated);
  return (
    <div className="App">
      <h1>INDEX PAGE</h1>
    </div>
  );
}

export default App;
