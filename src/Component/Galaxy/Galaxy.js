import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import planetData from "../../planetData";
import './Galaxy.css'


export default function Galaxy() {
  return (
    <div className="galaxy">
      <Canvas camera={{ position: [0, 30, 15], fov: 45 }}>
      
        <Sun />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <OrbitControls />
     
     </Canvas>
    </div>
  );
}
function Sun() {
  return (
    <mesh >
      <sphereGeometry args={[2.5, 32, 32]}  />
      <meshStandardMaterial color="#FFE600" transparent />
    </mesh>
  );
}
function Planet({ planet: { color, xRadius, zRadius, size, speed, offset, rotationSpeed, name  } }) {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() *speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    planetRef.current.rotation.y += rotationSpeed;

  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]}  />
        <meshStandardMaterial color={color} flat={true}/>
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1}/>
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={1} />
    </line>
  );
}