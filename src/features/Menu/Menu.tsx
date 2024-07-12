import React from "react";
import { Menu3D } from "./model/Menu";
import R3FCanvas from "@root/components/R3FCanvas/R3FCanvas";

function Menu() {
  return (
    <R3FCanvas>
      <Menu3D rotation-y={-Math.PI / 2} />
    </R3FCanvas>
  );
}

export default Menu;
