import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface MyBoxProps {
  url: string;
}

const MyBox: React.FC<MyBoxProps> = ({ url }) => {
  const texture = useTexture(url);
  const [positionY, setPositionY] = useState(1);
  const box = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 400) setPositionY(0.4);
      else if (width < 640) setPositionY(0.9);
      else if (width < 1000) setPositionY(0.5);
      else setPositionY(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useFrame((state, delta) => {
    if (box.current) {
      box.current.rotation.y += delta;
      box.current.rotation.x += delta;
      box.current.rotation.z -= delta;
    }
  });

  return (
    <>
      <mesh ref={box} rotation={[Math.PI / 4, Math.PI / 4, 0]} position={[0, positionY, 0]}>
        <Environment files="./light.exr" />
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default MyBox;
