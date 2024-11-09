"use client"
import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import * as THREE from "three";

const LaptopModel = ({ setDis, close }: any) => {
  let model = useGLTF("./mac.glb",true);
  let txt = useTexture("pic.jpg");
  const [Y, setY] = useState(-13);
  let meshes: any = {};
  let data = useScroll();

  model.scene.traverse((element) => {
    meshes[element.name] = element;
  });

if(close===false){
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
}
  meshes.matte.material.map = txt;
  meshes.matte.material.roughness = 1;
  meshes.matte.material.metalness = 1;
  meshes.matte.material.emissiveIntensity = 0;

let num: number = 90;
  useEffect(() => {
    if (window.innerWidth > 900) setY(-13);
    if (window.innerWidth > 400 && window.innerWidth < 900) setY(-17.5);
    if (window.innerWidth < 400) setY(-22);
    if(close){
      let increment = setInterval(() => {
        num += 1;
        num >= 180 && clearInterval(increment);
      }, 12);
    }
  }, [close]);


  useFrame((state, delta) => {
    if(close === false){
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);    

    }
    if(close == true && num !== 90 ){
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(num);
    }
    
    if (Math.ceil(data.offset * 90) > 85) setDis(true);
    if (Math.ceil(data.offset * 90) < 85) setDis(false);
  });

  return (
    <group position={[0, Y, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default LaptopModel;
