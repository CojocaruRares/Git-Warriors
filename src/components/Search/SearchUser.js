import React, { useState } from "react";
import { GetUser, GetRepo } from "../../utils/api";
import "./SearchUser.css";
import UserProfile from "./UserProfile";
import UserRepo from "./UserRepo";

function SearchUser() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
 
  const handleSearch = () => {
    GetUser(username)
      .then((user) => {
        setUserData(user);
      })
      .catch((error) => {
        console.error(error);
      });

    GetRepo(username)
    .then((repo) => {
      setUserRepos(repo);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="flex-div">
      <h2>Enter a Github username</h2>
      <input
        type="text"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>Search</button>
      {userData && <UserProfile data={userData} />}
      {userRepos && <UserRepo repos={userRepos}/>}
    </div>
  );
}

export default SearchUser;
