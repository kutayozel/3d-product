import React from "react";
import { easing } from "maath";
import { useSnapShot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "@/store";

const Shirt = () => {
  const snap = useSnapShot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);

  return <div>Shirt</div>;
};

export default Shirt;
