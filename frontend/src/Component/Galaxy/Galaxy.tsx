import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import planetData from "../../planetData";
import './Galaxy.css'
import { Planet } from '../../Planet.d';
import { Mesh, Vector3 } from "three";

interface Props{
  planet:Planet[]
}


const Galaxy : React.FC<Props> = ({planet}: Props):JSX.Element => {

  console.log(planetData);
  return (
    <div className="galaxy">
      <Canvas camera={{ position: [0, 30, 15], fov: 45 }}>    
        <Sun />
        { 
            planet.map((plt) => (
              <PlanetDrawing planet={plt} key={plt.id} />
            ))     
          }
        <Lights />
        <OrbitControls />
     
     </Canvas>
    </div>
  );
}

export default Galaxy


function Sun() {
  return (
    <mesh >
      <sphereGeometry args={[2.5, 32, 32]}  />
      <meshStandardMaterial color="#FFE600" transparent />
    </mesh>
  );
}

function PlanetDrawing({ planet: { color, id, name } }) {

  const planetRef = useRef<Mesh>(null!);
  const random = (a, b) => a + Math.random() * b;
  const xRadius= (id + 1.5) * 4;
  const zRadius= (id + 1.5) * 2;
  const size= random(0.5, 0.2);
  const speed=  random(0.5, 0.2);
  const offset= random(0, Math.PI * 2)
  const rotationSpeed = random(0, Math.PI * 2)
  
  //console.log(xRadius+' '+ zRadius+' '+ size+' '+ speed+' '+ offset+' '+ rotationSpeed);
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
        <meshStandardMaterial color={"#"+color}/>
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
  const points :Vector3[] = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry : THREE.BufferGeometry<THREE.NormalBufferAttributes> = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={1} />
    </line>
  );
}

