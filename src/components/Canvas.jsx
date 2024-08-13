import React, { useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const Canvas = () => {
  const canvasRef = useRef(null);

  const handleExportImage = () => {
    if (canvasRef.current) {
      canvasRef.current
        .exportImage('png')
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  // SEGUIR ACA CON REAcT SKETCH
  return (
    <div>
      <ReactSketchCanvas
        ref={canvasRef}
        style={styles}
        width="600"
        height="400"
        strokeWidth={4}
        strokeColor="red"
        exportWithBackgroundImage={false}
      />
      <button onClick={handleExportImage}>Get Image</button>
    </div>
  );
};

export default Canvas