/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import board from "../assets/SipnPlay_Feature_Board.glb";
import style from "../home.module.scss";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    Screen: THREE.Mesh;
  };
  materials: {
    Black: THREE.MeshStandardMaterial;
  };
};

export function Board(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(board) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Black}
          position={[-9.332, 9.061, -6.785]}
        />
        <mesh
          name="Screen"
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={materials.Black}
          position={[-9.066, 10.122, -6.785]}
          scale={[1, 1.561, 1]}
        >
          <Html
            zIndexRange={[0, 0]}
            className={style["red_div"]}
            position={[1.2, 0, 0.2]}
            center
          >
            <div className="board">
              <h1>Spin & Play</h1>
              <p>Spin the wheel and play the game</p>
            </div>
          </Html>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload(board);
