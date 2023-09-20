import React, {useState, useEffect } from "react";
import db from "../../utils/firebase";

function calculateSccore(data) {
  let sccore =
    data.public_repos * 10 +
    data.public_gists * 10 +
    data.followers * 2 +
    data.following;
  
  return sccore;
}

function Results(props) {
  const players = [props.player1Data, props.player2Data];
  let playerStatus;
  if (calculateSccore(players[0]) === calculateSccore(players[1]))
    playerStatus = ["Draw", "Draw"];
  else if (calculateSccore(players[0]) > calculateSccore(players[1]))
    playerStatus = ["Winner", "Loser"];
  else playerStatus = ["Loser", "Winner"];

  useEffect(() => {
    const winnerIndex =
      calculateSccore(players[0]) > calculateSccore(players[1]) ? 0 : 1;
    if (playerStatus[winnerIndex] !== "Draw") {
      const winner = players[winnerIndex];
      db.collection("players")
        .doc(winner.login)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const currentWins = doc.data().wins || 0;
            db.collection("players")
              .doc(winner.login)
              .update({
                wins: currentWins + 1,
              });
          } else {
            db.collection("players").doc(winner.login).set({
              avatar_url: winner.avatar_url,
              name: winner.name || winner.login,
              wins: 1,
            });
          }
        });
    }
  }, [players, playerStatus]);

  return (
    <div className="flex-row">
      <div className="flex-col">
        <h2>{playerStatus[0]}</h2>
        <h3>Sccore: {calculateSccore(players[0])}</h3>
        <img
          src={players[0].avatar_url}
          alt={`${players[0].name}'s profile`}
          width="220"
          height="220"
        />
        <a href={players[0].html_url}>{players[0].login}</a>
        <br/>
        <p>Repos: {players[0].public_repos}</p>
        <p>Gists: {players[0].public_gists}</p>
        <p>Followers: {players[0].followers}</p>
        <p>Following: {players[0].following}</p>
      </div>
      <div className="flex-col">
        <h2>{playerStatus[1]}</h2>
        <h3>Sccore: {calculateSccore(players[1])}</h3>
        <img
          src={players[1].avatar_url}
          alt={`${players[1].name}'s profile`}
          width="220"
          height="220"
        />
        <a href={players[1].html_url}>{players[1].login}</a>
        <p>Repos: {players[1].public_repos}</p>
        <p>Gists: {players[1].public_gists}</p>
        <p>Followers: {players[1].followers}</p>
        <p>Following: {players[1].following}</p>
      </div>
    </div>
  );
}

export default Results;
