import { UserContext } from "../context/userContext";
import { useContext } from "react";
import Card from "../components/Card";

const Profiles = () => {
  const { users, maleUsers, divorcedUsers, loaded } = useContext(UserContext);

  return (
    <div className="container">
      <section className="filters">
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
            maleUsers.map((user) => <Card user={user} key={user.id} />);
          }}
        >
          Man
        </button>
        <button
          onClick={() => {
            loaded ? (
              divorcedUsers.map((user) => <Card user={user} key={user.id} />)
            ) : (
              <h1>Loading...</h1>
            );
          }}
        >
          Not Divorced
        </button>
      </section>
      {loaded ? (
        users.map((user) => <Card user={user} key={user.id} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Profiles;
