import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import SipnPlay from "../assets/SipnPlay_Feature_Board.glb";

type GLTFResult = GLTF & {
	nodes: {
		Plane_1: THREE.Mesh;
		Plane_2: THREE.Mesh;
		RedPaper: THREE.Mesh;
		Circle: THREE.Mesh;
		PurplePaper: THREE.Mesh;
		Circle001: THREE.Mesh;
		BlackPaper: THREE.Mesh;
		Circle002: THREE.Mesh;
		GreenPaper: THREE.Mesh;
		Circle003: THREE.Mesh;
		Circle004: THREE.Mesh;
	};
	materials: {
		Brown: THREE.MeshStandardMaterial;
		Red: THREE.MeshStandardMaterial;
		Black: THREE.MeshStandardMaterial;
		Material: THREE.MeshStandardMaterial;
		Green: THREE.MeshStandardMaterial;
	};
};

export function Board(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(SipnPlay) as GLTFResult;
	return (
		<group
			{...props}
			dispose={null}>
			<group position={[-9.562, 3.633, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane_1.geometry}
					material={materials.Black}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane_2.geometry}
					material={materials.Brown}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.RedPaper.geometry}
				material={materials.Red}
				position={[-9.056, 5.524, -2.35]}
				rotation={[-0.018, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle.geometry}
				material={materials.Black}
				position={[-8.866, 6.602, -2.193]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PurplePaper.geometry}
				material={materials.Material}
				position={[-9.028, 4.285, -5.004]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle001.geometry}
				material={materials.Black}
				position={[-8.887, 5.3, -4.31]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.BlackPaper.geometry}
				material={materials.Black}
				position={[-8.956, 5.63, -7.308]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle002.geometry}
				material={materials.Black}
				position={[-8.804, 6.724, -7.191]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.GreenPaper.geometry}
				material={materials.Green}
				position={[-9.027, 4.715, -10.628]}
				rotation={[0.063, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle003.geometry}
				material={materials.Black}
				position={[-8.868, 5.875, -10.432]}
				rotation={[0.063, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle004.geometry}
				material={materials.Black}
				position={[-8.887, 5.3, -5.645]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
		</group>
	);
}

useGLTF.preload(SipnPlay);
