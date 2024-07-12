import React from "react";

import { Board } from "./model/Board";
import R3FCanvas from "@root/components/R3FCanvas/R3FCanvas";

function Home() {
  return (
    <R3FCanvas>
      <Board rotation-y={-Math.PI / 2} />
    </R3FCanvas>
  );
}

export default Home;
