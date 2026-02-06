import React from 'react'
import { motion } from 'framer-motion'

function Viewer({ imagenSrc, onCerrar }) {
    if (!imagenSrc) return null;

    return (
        <motion.div
            className='viewer'
            onClick={onCerrar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.img
                src={imagenSrc}
                alt="imagenAmpliada"
                onClick={(e) => e.stopPropagation()}
                layoutId={imagenSrc} // <--- ESTO conecta la miniatura con el viewer
            />
            <button className='cerrar' onClick={onCerrar}>Cerrar</button>
        </motion.div>
    )
}

export default Viewer;