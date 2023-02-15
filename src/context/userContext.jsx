import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [printUsers, setPrintUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [divorcedUsers, setDivorcedUsers] = useState([]);
  const [maleUsers, setMaleUsers] = useState([]);




  const getUsers = async () => {
    const res = await fetch(
      "https://63ecf23b32a0811723a597c4.mockapi.io/blinddates/users"
    );
    const data = await res.json();
    console.log("LANZANDO PETICIÓN");
    setUsers(data);
    setPrintUsers(data);
    setDivorcedUsers(data.filter((user) => !user.divorced));
    setMaleUsers(data.filter((user) => user.sex === "male"));
    setLoaded(true);
  };



  useEffect(() => {
    getUsers();

  },[]);

  return (
    <UserContext.Provider value={{ users, printUsers, maleUsers, divorcedUsers, loaded }}>
      {children}
    </UserContext.Provider>
  );
};
