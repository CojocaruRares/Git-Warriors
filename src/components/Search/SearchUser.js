import React, { useState } from "react";
import { GetUser } from "../../utils/api";
import "./SearchUser.css";
import UserProfile from "./UserProfile";

function SearchUser() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [displayedUsername, setDisplayedUsername] = useState("");

  const handleSearch = () => {
    GetUser(username)
      .then((user) => {
        setUserData(user);
        setDisplayedUsername(user.name || username);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex-div">
      <h1>Test</h1>
      <input
        type="text"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {userData && <UserProfile data={userData} />}
    </div>
  );
}

export default SearchUser;
