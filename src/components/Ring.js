import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from "three";


const saturnRingTexture = new THREE.TextureLoader().load('/textures/saturn_ring.png');

const Ring = (props) => {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        // ref.current.rotation.y += 1;
        // ref.current.position.z += 1;

    })
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            ref={ref}
            onClick={(event) => click(!clicked)}
        >
            <ringGeometry args={props.attributes} />
            <meshLambertMaterial side={THREE.DoubleSide} color={props.color} map={props.texture ? saturnRingTexture : null} opacity={props.texture ? 0.9 : 1} transparent />
        </mesh>
    )
};

export default Ring;