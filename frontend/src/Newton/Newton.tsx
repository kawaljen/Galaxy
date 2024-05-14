import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

const G = 6.67430e-11; // Gravitational constant
const sunMass = 1.989e30; // Mass of the Sun
const earthMass = 5.972e24; // Mass of the Earth
const distanceScale = 1e9; // Scale down the distance to fit the scene

const Earth = ({ initialPosition, initialVelocity, speed }) => {
  const earthRef =useRef<Mesh>(null!);
  const position = useRef(new THREE.Vector3().copy(initialPosition));
  const velocity = useRef(new THREE.Vector3().copy(initialVelocity));
  const deltaTime = 1 / 60; // Time step for integration

  useFrame(() => {
    // Calculate distance between Sun and Earth
    const distanceVector = new THREE.Vector3().subVectors(new THREE.Vector3(0, 0, 0), position.current);
    const distance = distanceVector.length();

    // Calculate gravitational force magnitude
    const forceMagnitude = (G * sunMass * earthMass) / (distance * distance);

    // Calculate force vector
    const forceVector = distanceVector.normalize().multiplyScalar(forceMagnitude);

    // Calculate acceleration (F = ma => a = F/m)
    const acceleration = forceVector.divideScalar(earthMass);

    // Update velocity and position using simple Euler integration
    velocity.current.add(acceleration.multiplyScalar(deltaTime * speed));
    position.current.add(velocity.current.clone().multiplyScalar(deltaTime * speed));

    // Update Earth's position in the scene
    if (earthRef.current) {
      earthRef.current.position.set(
        position.current.x / distanceScale,
        position.current.y / distanceScale,
        position.current.z / distanceScale
      );
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#0000ff" />
    </mesh>
  );
};

const Sun = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="#FFE600" transparent />
    </mesh>
  );
};

const Newton = () => {
  const initialPosition = new THREE.Vector3(10 * distanceScale, 0, 0);
  const initialVelocity = new THREE.Vector3(0, 29780, 0);

  return (
    <Canvas  camera={{ position: [0, 30, 15], fov: 45 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sun />
      <OrbitControls />
      <Earth initialPosition={initialPosition} initialVelocity={initialVelocity} speed={1000} />
    </Canvas>
  );
};

export default Newton;