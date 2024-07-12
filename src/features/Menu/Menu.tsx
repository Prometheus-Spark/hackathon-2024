import { Canvas } from "@react-three/fiber";
import { CoffeeCup } from "./model/CoffeeCup";
import style from "./menu.module.scss";
import { Center, Stage } from "@react-three/drei";

function Menu() {
	return (
		<>
			<div className={style["menu-container"]}>
				<Canvas
					camera={{
						fov: 45,
						position: [0, 2, 5],
						near: 0.1,
						far: 1000,
					}}
					className={style["menu-canvas"]}>
					<Stage>
						<Center>
							<CoffeeCup />
						</Center>
					</Stage>
				</Canvas>
				<div className={style["menu-content"]}>
					<h1>Menu</h1>
					<p>Our menu is coming soon!</p>
				</div>
			</div>
		</>
	);
}

export default Menu;
