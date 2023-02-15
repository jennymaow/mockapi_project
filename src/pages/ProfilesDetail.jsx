import React, { useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProfilesDetail.css";

const ProfilesDetail = () => {
  const [profile, setProfile] = useState({});

  const { users, loaded } = useContext(UserContext);
  console.log(users);
  const { id } = useParams();

  const findProfile = () => {
    console.log(users);
    setProfile(users.find((user) => user.id === id));
  };

  useEffect(() => {
    findProfile();

    console.log(profile);
  }, []);

  return (
    <div className="profiles-detail">
      {loaded ? (
        <div className="detail">
          <h1>{profile.emoji}</h1>
          <div className="profileCard">
            <h2>{profile.name}</h2>
            <h3>Gender: {profile.sex}</h3>
            <h3>Birthdate: {profile.birthdate}</h3>
            <h3>Job Position: {profile.job}</h3>
            <h3>Pet: {profile.pet}</h3>
            <h3>Vehicle: {profile.vehicle}</h3>
            {profile.divorced ? <h3>Divorced: Yes</h3> : <h3>Divorced: No</h3>}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}

      <Link to="/users" className="back">Back</Link>
    </div>
  );
};

export default ProfilesDetail;
