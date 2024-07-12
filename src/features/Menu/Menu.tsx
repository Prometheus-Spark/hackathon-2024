import React from "react";
import { MenuTable } from "./model/MenuTable";

import R3FCanvas from "@root/components/R3FCanvas/R3FCanvas";
import { OrbitControls } from "@react-three/drei";

function Menu() {
	return (
		<R3FCanvas>
			<MenuTable
				rotation-y={-Math.PI / 2}
				scale={1}
			/>
		</R3FCanvas>
	);
}

export default Menu;
