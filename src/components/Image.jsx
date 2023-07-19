import React from 'react';
import { Html } from '@react-three/drei';
import imgUrl from '../assets/Capture001.png'

const ImageComponent = ({position}) => {

  return (
    <Html>
        <img src={imgUrl} alt="Image" style={{width: '100px', height: '50px'}}/>
    </Html>
  );
};

export default ImageComponent;