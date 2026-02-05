function PhotoGrid({ fotos, columnWidth }) {
    const gridStyle = {
        '--grid-width': columnWidth,
    }
    return (

        <div className='cuadricula-fotos' style={gridStyle}>

            {fotos.map((photoUrl, index) => (

                <div key={index} className='foto-item'>

                    <img src={photoUrl} alt={`fotoCargada ${index}`} />

                </div>
            ))}
        </div>
    );
}

export default PhotoGrid;