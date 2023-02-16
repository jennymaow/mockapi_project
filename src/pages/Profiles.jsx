import { UserContext } from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import { useDebounce} from "use-debounce"
import Card from "../components/Card";
import "./Profiles.css";

const Profiles = () => {
  const [printUsers, setPrintUsers] = useState([]);
  const [divorcedUsers, setDivorcedUsers] = useState([]);
  const [maleUsers, setMaleUsers] = useState([]);
  const [femaleUsers, setFemaleUsers] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordValue]= useDebounce(keyword, 500)
/*   const [prueba, setPrueba]=useState(0); */
  
  const { users, loaded, setLoaded} = useContext(UserContext);


  
  const filterUsers = () =>{
    setLoaded(true);
    setPrintUsers(users);
    setDivorcedUsers(users.filter((user) => !user.divorced));
    setMaleUsers(users.filter((user) => user.sex === "male"));
    setFemaleUsers(users.filter((user) => user.sex === "female"))
  }

  const filterInputUsers = () => {
    setPrintUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  useEffect(() => {
    filterUsers();
    filterInputUsers();
  }, [keywordValue]);

  return (
    <div className="container">
  {/*   {console.log(prueba)} */}
      <section className="filters">
        <h3>Popular filters: </h3>
        <button
          onClick={() => {
            setPrintUsers(users);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setPrintUsers(maleUsers);
          }}
        >
          Man
        </button>
        <button
          onClick={() => {
            setPrintUsers(femaleUsers);
          }}
        >
          Woman
        </button>
        <button
          onClick={() => {
            setPrintUsers(divorcedUsers);
          }}
        >
          Not Divorced
        </button>
      </section>
      <input type="text" onChange={(ev) => setKeyword(ev.target.value)} placeholder="Search" />
      <div className="user-profiles">
        {loaded ? (
          printUsers.map((user) => <Card user={user} key={user.id}/>)
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Profiles;
