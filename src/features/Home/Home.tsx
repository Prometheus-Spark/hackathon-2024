import { Board } from "./model/Board";
import R3FCanvas from "@root/components/R3FCanvas/R3FCanvas";

function Home() {
	return (
		<R3FCanvas
			fov={75}
			position={[0, 0, 5]}>
			<Board rotation-y={-Math.PI / 2} />
		</R3FCanvas>
	);
}

export default Home;
