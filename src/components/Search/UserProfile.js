import React from "react";
import "./UserProfile.css";
function UserProfile(props) {
  let userData = props.data;

  return (
    <div className="flex-row">
      <div className="flex-col">
        <img
          src={userData.avatar_url}
          alt={`${userData.name}'s profile`}
          width="220"
          height="220"
        />
        <a href={userData.html_url}>{userData.login}</a>
      </div>
      <div className="flex-col-text1">
      <h2>{userData.name || userData.login}</h2>
      <p>{userData.bio}</p>
      </div>
      <div className="flex-col-text2">
        <p>Repos: {userData.public_repos}</p>
        <p>Gists: {userData.public_gists}</p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
      </div>
    </div>
  );
}
export default UserProfile;
