import { UserContext } from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import "./Profiles.css";

const Profiles = () => {
  const { users, maleUsers, divorcedUsers, loaded } = useContext(UserContext);
  const [printUsers, setPrintUsers] = useState([]);

  return (
    <div className="container">
      <section className="filters">
      <h3>Popular filters: </h3>
        <button
          onClick={() => {
            loaded ? (
              users.map((user) => <Card user={user} key={user.id} />)
            ) : (
              <h1>Loading...</h1>
            );
          }}
        >
          All Users
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
            setPrintUsers(divorcedUsers);
          }}
        >
          Not Divorced
        </button>
      </section>
      <div className="user-profiles">
        {loaded ? (
          users.map((user) => <Card user={user} key={user.id} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Profiles;
