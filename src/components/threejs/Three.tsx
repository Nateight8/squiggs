import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AmbientLight } from "three";
import {
  PerspectiveCamera,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Power0 } from "gsap";
const { gsap } = require("gsap/dist/gsap");

type Props = {};

const Three = (props: Props) => {
  const texture = useTexture("/btc.png");
  const ballRef = useRef<THREE.Points>(null);
  const [isStopped, setIsStopped] = useState(false);
  // useFrame(() => {
  //   if (ballRef.current) {
  //     ballRef.current.rotation.y += 0.01; // Rotate the sphere by 0.01 radians around the y-axis
  //   }
  // });

  useLayoutEffect(() => {
    if (ballRef.current) {
      const mesh = ballRef.current;
      const duration = 60;

      gsap.to(ballRef.current.position, 5, {
        y: 0,
        z: 2,
      });

      gsap.to(mesh.rotation, duration, {
        y: Math.PI * 2,
        ease: Power0.easeNone,
        repeat: -1,
      });
    }
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <OrbitControls />
      <points position={[2, 0, -25]} ref={ballRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <pointsMaterial
          color="#fff"
          map={texture}
          size={0.05}
          transparent
          alphaTest={0.5}
        />
      </points>
      <ambientLight args={["#fff", 0.05]} />

      <spotLight
        args={["#fff", 1, 177, 0.59, 0.1, 1]}
        position={[-10, 10, 15]}
      />
    </>
  );
};

export default Three;
