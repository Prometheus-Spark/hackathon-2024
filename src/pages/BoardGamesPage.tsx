import BoardGames from "@root/features/board-games/BoardGames";
import React from "react";

function BoardGamesPage() {
  return (
    <div className="app-container">
      <div className="app-padding">
        <BoardGames />
      </div>
    </div>
  );
}

export default BoardGamesPage;
