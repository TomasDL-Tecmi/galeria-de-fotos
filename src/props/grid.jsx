import { motion } from 'framer-motion';

function PhotoGrid({ fotos, columnWidth, onClick }) {
    const gridStyle = {
        '--grid-width': columnWidth,
    }
    return (

        <div className='cuadricula-fotos' style={gridStyle}>

            {fotos.map((photoUrl, index) => (

                <div key={index} className='foto-item'>

                    <motion.img
                        src={photoUrl}
                        alt={`fotoCargada ${index}`}
                        onClick={() => onClick(photoUrl)}
                        layoutId={photoUrl}
                        transition={{
                            type: "tween",
                            ease: "easeOut",
                            duration: 0.1
                        }}
                    />

                </div>
            ))}
        </div>
    );
}

export default PhotoGrid;