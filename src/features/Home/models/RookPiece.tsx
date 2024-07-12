import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Rook from "../assets/RookPiece.glb";

type GLTFResult = GLTF & {
	nodes: {
		Circle002: THREE.Mesh;
	};
	materials: {
		White: THREE.MeshStandardMaterial;
	};
};

export function RookPiece(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(Rook) as GLTFResult;
	return (
		<group
			{...props}
			dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle002.geometry}
				material={materials.White}
				position={[-1, 0, -0.035]}
			/>
		</group>
	);
}

useGLTF.preload(Rook);
