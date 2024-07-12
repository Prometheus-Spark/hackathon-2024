import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import King from "../assets/KingPiece.glb";

type GLTFResult = GLTF & {
	nodes: {
		Circle005: THREE.Mesh;
	};
	materials: {
		White: THREE.MeshStandardMaterial;
	};
};

export function KingPiece(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF(King) as GLTFResult;
	return (
		<group
			{...props}
			dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle005.geometry}
				material={materials.White}
				position={[2.327, 0, -0.035]}
			/>
		</group>
	);
}

useGLTF.preload(King);
