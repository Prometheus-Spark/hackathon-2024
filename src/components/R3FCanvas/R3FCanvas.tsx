import "./R3FCanvas.module.scss";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraSettingsProps } from "./R3FCanvas.types";
import { Center, Stage } from "@react-three/drei";

const cameraSettings: CameraSettingsProps = {
	fov: 45,
	near: 0.1,
	far: 1000,
	position: [0, 2, 5],
};

function R3FCanvas({ children }: { children: React.ReactNode }) {
	return (
		<Canvas
			linear
			camera={{
				fov: cameraSettings.fov,
				near: cameraSettings.near,
				far: cameraSettings.far,
				position: [...cameraSettings.position] as [number, number, number],
			}}>
			<Stage
				intensity={2}
				environment={"apartment"}>
				<Center>{children}</Center>
			</Stage>
		</Canvas>
	);
}

export default R3FCanvas;
