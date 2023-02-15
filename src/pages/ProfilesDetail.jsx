import React, { useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

const ProfilesDetail = () => {

  const [profile, setProfile] = useState({});

  const { users, loaded } = useContext(UserContext);
  console.log(users);
  const { id } = useParams();

  const findProfile = () => {
    console.log (users);
    setProfile(users.find((user) => user.id === id));
  };


  useEffect(() => {
    findProfile();

    console.log(profile);
  }, []);

  return (
    <div className="profiles-detail">
      <Link to="/">Back</Link>
      {loaded ? (
        <div className="detail">
          <h1>{profile.emoji}</h1>
          <h2>{profile.name}</h2>
          <h3>{profile.sex}</h3>
          <h3>{profile.birthdate}</h3>
          <h3>Job Position: {profile.job}</h3>
          <h3>Pet: {profile.pet}</h3>
          <h3>Vehicle: {profile.vehicle}</h3>
          {profile.divorced ? <h3>Divorced: Yes</h3> : <h3>Divorced: No</h3>}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProfilesDetail;
