import react from "react";

function PhotoGrid({ photos, columnWidth }) {
    const gridStyle = {
        '--grid-width': columnWidth,
    }
    return (
        <div className='cuadricula-fotos' style={gridStyle}>
            {photos.map((photoUrl, index) => (
                <div key={index} className='foto-item'>
                    <img src={photoUrl} alt={`fotoCargada ${index}`} />
                </div>
            ))}
        </div>
    );
}

export default PhotoGrid;