import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, useGLTF } from '@react-three/drei';
import Navbar from '../components/Navbar';







const Laptop = () => {
  const gltf = useGLTF('./asus_rog_-_zephyrus_duo_i6.glb', true);
  const screenRef = useRef();




  return (

    

    <primitive object={gltf.scene} scale={10}>
      <mesh ref={screenRef} position={[0, 0, 0]}>
        {/* Ensure this points to the screen part */}
      </mesh>
    </primitive>
  );
};

const LandingPage = () => (
  <>
 
    <div className='bg-text' style={{ position: 'relative', height: '102vh', width: '100vw' }}>
    <Navbar />
              <div style={{
        position: 'absolute',
        top: '350px', 
        left: '50%',
        transform: 'translate(-50%, -38%)',
        color: 'white',
        fontSize: '86px',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #ff0080, #00c6ff)', // Pink to Blue Gradient
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.02), 0 0 20px rgba(255, 255, 255, 0.6)',
        zIndex: 0, 
        lineHeight: '120px',
        
      }}>
        
        <h1 className='greet mb-4'>Hey Geeks</h1>
        
        <h1 className='innovating'>
            INNOVATING
        </h1>
        <h3 className='oneline'>and creating new stuffs.
        </h3>
        <h3 className='gameline'>
          Taking the game to the <span>next level.</span> 
        </h3>
    
        
      </div>
  <Canvas style={{ height: '80%', width: '100%' }}>
    <ambientLight intensity={1.5} />
    <directionalLight position={[5, 5, 5]} intensity={100} />
    <Laptop />

    <OrbitControls enableZoom={false} />
  </Canvas>
</div>
</>
);

export default LandingPage;
