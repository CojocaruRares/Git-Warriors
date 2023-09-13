import React, { useState } from "react";
import { GetUser } from "../../utils/api";
import Results from "./Results"
import "./Battle.css";

function Battle() {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");

  const [player1Data, setPlayer1Data] = useState(null);
  const [player2Data, setPlayer2Data] = useState(null);

  const [battleFlag, setFlag] = useState(0);


  function handleSearch(input, setter) {
    GetUser(input)
      .then((user) => {
        setter(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (battleFlag === 0) {
    return (
      <div className="flex-row">
        <div className="flex-col">
          <h2>{player1}</h2>
          {player1Data ? (
            <img
              src={player1Data.avatar_url}
              alt={`${player1Data.name}'s profile`}
              width="220"
              height="220"
            />
          ) : (
            <input
              type="text"
              placeholder="Github username"
              onChange={(e) => setPlayer1(e.target.value)}
            />
          )}
          {!player1Data && (
            <button
              onClick={() =>
                handleSearch(player1, (user) => setPlayer1Data(user))
              }
            >
              Submit
            </button>
          )}
        </div>
        <div className="battle-btn">
          {player1Data && player2Data && (
            <button onClick={() => (setFlag(1))}>Battle</button>
          )}
        </div>
        <div className="flex-col">
          <h2>{player2}</h2>
          {player2Data ? (
            <img
              src={player2Data.avatar_url}
              alt={`${player2Data.name}'s profile`}
              width="220"
              height="220"
            />
          ) : (
            <input
              type="text"
              placeholder="Github username"
              onChange={(e) => setPlayer2(e.target.value)}
            />
          )}
          {!player2Data && (
            <button
              onClick={() =>
                handleSearch(player2, (user) => setPlayer2Data(user))
              }
            >
              Submit
            </button>
          )}
        </div>
      </div>
    );
  }
  else{
    return (
      <Results player1Data = {player1Data} player2Data = {player2Data}/>
    )
  }
}

export default Battle;
