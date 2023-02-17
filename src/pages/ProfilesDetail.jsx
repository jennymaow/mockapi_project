import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "./ProfilesDetail.css";

const ProfilesDetail = () => {
  const [request] = useOutletContext();
  const { id } = useParams();
  const profile = request?.find((user) => user.id === id);

  useEffect(() => {}, [request]);

  return (
    <div className="profiles-detail">
      <div className="detail">
        {typeof profile == "object" && (<><h1>{profile.emoji}</h1>
        <div className="profileCard">
          <h2>{profile.name}</h2>
          <h3>Gender: {profile.sex}</h3>
          <h3>Birthdate: {profile.birthdate}</h3>
          <h3>Job Position: {profile.job}</h3>
          <h3>Pet: {profile.pet}</h3>
          <h3>Vehicle: {profile.vehicle}</h3>
          {profile.divorced ? <h3>Divorced: Yes</h3> : <h3>Divorced: No</h3>}
        </div></>)}
      </div>
      <Link to="/users" className="back">
        Back
      </Link>
    </div>
  );
};

export default ProfilesDetail;
