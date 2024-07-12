import R3FCanvas from "@root/Component/R3FCanvas/R3FCanvas";
import React from "react";
import { Menu3D } from "./model/Menu";

function Menu() {
	return (
		<R3FCanvas>
			<Menu3D rotation-y={-Math.PI / 2} />
		</R3FCanvas>
	);
}

export default Menu;
