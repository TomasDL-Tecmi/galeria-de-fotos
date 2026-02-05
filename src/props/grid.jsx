function PhotoGrid({ fotos, columnWidth, onClick }) {
    const gridStyle = {
        '--grid-width': columnWidth,
    }
    return (

        <div className='cuadricula-fotos' style={gridStyle}>

            {fotos.map((photoUrl, index) => (

                <div key={index} className='foto-item'>

                    <img
                        src={photoUrl}
                        alt={`fotoCargada ${index}`}
                        onClick={() => onClick(photoUrl)}
                    />

                </div>
            ))}
        </div>
    );
}

export default PhotoGrid;