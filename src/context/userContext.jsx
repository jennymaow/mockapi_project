import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const ID = localStorage.getItem("user");
    const jsonID = JSON.parse(ID);
    console.log(jsonID);
    return jsonID ? jsonID : null;
  });

  const [loaded, setLoaded] = useState(false);

  return (
    <UserContext.Provider value={{ users, setUsers, loaded, setLoaded }}>
      {children}
    </UserContext.Provider>
  );
};
