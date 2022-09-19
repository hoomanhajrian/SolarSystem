import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from "three";
import { Text } from '@react-three/drei';
import Ring from './Ring';

const Planet = (props) => {

    const texture = new THREE.TextureLoader().load(props.texture);

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    let t = 0;
    useFrame((state, delta) => {
        t += props.speed ? props.speed : null;
        ref.current.position.x = props.rotationValue * Math.cos(t) + 0;
        ref.current.position.z = props.rotationValue * Math.sin(t) + 0; // These to strings make it work
        ref.current.rotation.y += .002;
    })


    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <sphereGeometry attach='geometry' />
            <meshLambertMaterial color={props.color} map={texture} />
            {props.name === 'Saturn' ? <Ring texture={true} position={props.position} scale={[5, 5, 5]} attributes={[0.25, 0.35, 128]} /> : ''}
            <Text color="white" position={[0, 1.5, 0]} scale={[3, 3, 3]}>
                {props.name}
            </Text>
        </mesh>
    )
};

export default Planet;