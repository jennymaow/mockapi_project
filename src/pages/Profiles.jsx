import { useOutletContext } from "react-router-dom";
import {  useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Card from "../components/Card";
import "./Profiles.css";

const Profiles = () => {
  const [request] = useOutletContext();
  const [printUsers, setPrintUsers] = useState();
  const [keyword, setKeyword] = useState("");
  const [keywordValue] = useDebounce(keyword, 500);

  useEffect(() => {
    typeof request == "object" && setPrintUsers(request)
  }, [keywordValue, request]);

  return (
    <div className="container">
      <section className="filters">
        <h3>Popular filters: </h3>
        <button
          onClick={() => {
            setPrintUsers(request);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setPrintUsers(() => request.filter((user) => user.sex === "male"));
          }}
        >
          Man
        </button>
        <button
          onClick={() => {
            setPrintUsers(() =>
              request.filter((user) => user.sex === "female")
            );
          }}
        >
          Woman
        </button>
        <button
          onClick={() => {
            setPrintUsers(() => request.filter((user) => !user.divorced));
          }}
        >
          Not Divorced
        </button>
      </section>
      <input
        type="text"
        onChange={(ev) => {
          setKeyword(ev.target.value);
          setPrintUsers(
            request.filter((user) =>
              user.name.toLowerCase().includes(ev.target.value.toLowerCase())
            )
          );
        }}
        placeholder="Search"
      />
      <div className="user-profiles">
        {printUsers?.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Profiles;
