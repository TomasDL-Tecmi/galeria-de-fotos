import React from 'react'

function Viewer({ imagenSrc, onCerrar }) {
    if (!imagenSrc) return null;

    return (
        <div className='viewer' onClick={onCerrar}>
            <img src={imagenSrc} alt="imagenAmpliada" onClick={(e) => e.stopPropagation()} />
            <button onClick={onCerrar}>Cerrar</button>
        </div>
    )
}

export default Viewer;