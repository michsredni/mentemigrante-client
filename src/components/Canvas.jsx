import React, { useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Button} from 'react-bootstrap';
import { Eraser, Pen, Redo, RotateCcw, Save, Undo } from 'lucide-react';

function Canvas() {
  const colorInputRef = useRef(null);
  const canvasRef = useRef(null);
  const [strokeColor, setStrokeColor] = useState('#a855f7');
  const [eraseMode, setEraseMode] = useState(false);

  function handleStrokeColorChange(event) {
    setStrokeColor(event.target.value);
    console.log(strokeColor);
  }

  function handleEraserClick() {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  }

  function handlePenClick() {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  }

  function handleUndoClick() {
    canvasRef.current?.undo();
  }

  function handleRedoClick() {
    canvasRef.current?.redo();
  }

  function handleClearClick() {
    canvasRef.current?.clearCanvas();
  }

  async function handleSave() {
    const dataURL = await canvasRef.current?.exportImage('png');
    if (dataURL) {
      const link = Object.assign(document.createElement('a'), {
        href: dataURL,
        style: { display: 'none' },
        download: 'sketch.png'
      });

      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  }

  return (
    <div className='sketch-canvas'>
      <ReactSketchCanvas
        width='80%'
        height='430px'
        ref={canvasRef}
        strokeColor={strokeColor}
        canvasColor='transparent'
        className='!rounded-2xl !border-purple-500 dark:!border-purple-800'
      />

      <div className='sketch-canvas-tools'>
      
        <Button
          size='icon'
          type='button'
          onClick={() => colorInputRef.current?.click()}
          style={{ backgroundColor: strokeColor }}
        >
          <input
            type='color'
            ref={colorInputRef}
            className='sr-only'
            value={strokeColor}
            onChange={handleStrokeColorChange}
          />
        </Button>

     
        <div className='sketch-canvas-drawing'>
          <Button
            size='icon'
            type='button'
            variant='outline'
            disabled={!eraseMode}
            onClick={handlePenClick}
          >
            <Pen size={16} />
          </Button>
          <Button
            size='icon'
            type='button'
            variant='outline'
            disabled={eraseMode}
            onClick={handleEraserClick}
          >
            <Eraser size={16} />
          </Button>
        </div>

        
        <div className='sketch-canvas-tools-actions'>
          <Button
            size='icon'
            type='button'
            variant='outline'
            onClick={handleUndoClick}
          >
            <Undo size={16} />
          </Button>
          <Button
            size='icon'
            type='button'
            variant='outline'
            onClick={handleRedoClick}
          >
            <Redo size={16} />
          </Button>
          <Button
            size='icon'
            type='button'
            variant='outline'
            onClick={handleClearClick}
          >
            <RotateCcw size={16} />
          </Button>

          <Button
            size='icon'
            type='button'
            variant='outline'
            onClick={handleSave}
          >
            <Save size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Canvas