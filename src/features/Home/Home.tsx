import React from "react";
import R3FCanvas from "@root/Component/R3FCanvas/R3FCanvas";
import { Board } from "./model/Board";

function Home() {
	return (
		<R3FCanvas>
			<Board rotation-y={-Math.PI / 2} />
		</R3FCanvas>
	);
}

export default Home;
