import { useState, useEffect } from "react";
const useRequest = () => {
  const [users, setUsers] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const getUsers = async () => {
    const res = await fetch(
      "https://63ecf23b32a0811723a597c4.mockapi.io/blinddates/users"
    );
    const data = await res.json();
    setUsers(data);
    setLoaded(true);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return users;
};

export default useRequest;
