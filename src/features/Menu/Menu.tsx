import { MenuTable } from "./model/MenuTable";

import R3FCanvas from "@root/components/R3FCanvas/R3FCanvas";

function Menu() {
  return (
    <R3FCanvas fov={45} position={[0, 2, 5]}>
      <MenuTable rotation-y={-Math.PI / 2} />
    </R3FCanvas>
  );
}

export default Menu;
