import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import SHOTwer from "./SHOTwer";

const App = () => {
  const [allPlayersData, loading3] = useFetch(
    "https://raw.githubusercontent.com/rdji20/data/master/nba_shot_18to19_All.csv"
  );

  const [listPlayers, setListPlayers] = useState(false);

  return (
    <div>
      <h1>SHOTWER: </h1>
      <h1> player's shot visualization</h1>
      <h3> By Roberto Infante </h3>
      <div className="text-ctn">
        <p>
          {" "}
          This software contains data from all the shots attempted by all the
          players in the 2018-19 NBA season. A query example is player1 =
          "Damian Lillard" and player2 "Markelle Fultz" (Expected name as NBA
          database).
        </p>
        <p>
          {" "}
          SHOTwer is an anlysis tool intended to compare two NBA players' types
          of shots and shot distribution. It can be used as an exploratory
          analysis visualization of the NBA shot stats database, or to do an
          analysis on a specific type of player depending on their shot, among
          other types of analyses. The intention of this tool is to show the
          data points in a way in which the user can visually space the shots
          taken in consideration. In this version we can filter by zone, time
          span, and weather the shot was made or not. We can see the shots of
          just one player or make the comparison between the two entities by
          overlapping the second player data points on top of the first player's
          shots. When hovering on the data points, we show the name of the
          player who made that shot, the type of shot, and the minutes and
          seconds remaining when that shot was attempted.
        </p>
      </div>
      <div>
        <SHOTwer data={allPlayersData} />
      </div>
    </div>
  );
};

export default App;
