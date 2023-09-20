import React, { useEffect, useState } from "react";
import db from "../../utils/firebase";
import "./Leaderboard.css";

function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    db.collection("players")
      .get()
      .then((querySnapshot) => {
        const playersData = [];
        querySnapshot.forEach((doc) => {
          const playerData = doc.data();
          playersData.push(playerData);
        });
        setPlayers(playersData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const sortedPlayers = [...players].sort((a, b) => b.wins - a.wins);

  return (
    <div className="flex-col">
      <h1>Leaderboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Name</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>
                <img
                  src={player.avatar_url}
                  alt={`${player.name}'s avatar`}
                  width="50"
                  height="50"
                />
              </td>
              <td>{player.name}</td>
              <td>{player.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
