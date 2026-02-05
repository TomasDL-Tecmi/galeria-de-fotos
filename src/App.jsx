import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhotoGrid from './props/grid.jsx'

function App() {
  const imagenes = [
    'https://media.discordapp.net/attachments/1468764745216823308/1468764760853057730/if-i-had-to-use-on-of-these-as-my-pfp-which-one-would-i-use-v0-hkvwk68eu9h81.png?ex=69853547&is=6983e3c7&hm=439f3dc81ac4d757f82a773f293fa5e1f654ffb13b3895dea6d1bc6f311dda52&=&format=webp&quality=lossless&width=814&height=814',
    'https://media.discordapp.net/attachments/1468764745216823308/1468765126504091770/305dede5fd2e655fd862fcf7a7e482fb3d-toothless-howtodragon-trailer.rsquare.w330.png?ex=6985359e&is=6983e41e&hm=00dfe7ac74b4d114bfc12101269608a3c4cbc3ac8bafe07bc50b42decd20234c&=&format=webp&quality=lossless&width=445&height=445',
    'https://i.pinimg.com/736x/6e/25/fb/6e25fb18ddf7ed809b168b11810d9c28.jpg',
    'https://i.pinimg.com/736x/d1/1f/40/d11f40b83036fcd146d881c378550586.jpg',
    'https://i.pinimg.com/736x/8f/78/ed/8f78ed596c6178bb4f9e2aa55d1f484e.jpg',
    'https://i.pinimg.com/736x/ec/22/16/ec2216eb159f2ed61b815de7a411a0b1.jpg',
    'https://i.pinimg.com/736x/8c/9e/c1/8c9ec16602f1b506d79adc8151f26772.jpg',
    'https://i.pinimg.com/736x/cd/f7/4b/cdf74b7657c9a52f51fc765ead1e8692.jpg',
    'https://i.pinimg.com/736x/0e/5e/67/0e5e677b360f7322d137f45feaeb431e.jpg',
    'https://i.pinimg.com/736x/d6/b1/f3/d6b1f319080739d8289701a84323f023.jpg',
    'https://i.pinimg.com/736x/2e/6d/37/2e6d37ccf0485ccad08274f4653b4803.jpg'
  ];

  return (
    <>
      <div className='encabezado'>
        <img src={viteLogo} className='logos'></img>

        <div>
          <h1 className='title'>Galeria de fotos</h1>
          <h2 className='title'>Con React y Vite</h2>
        </div>

        <img src={reactLogo} className='logos'></img>
      </div>

      <main className='gridContainer'>
        <PhotoGrid
          fotos={imagenes} //De esta variable se obtienen las imagenes, le estamos asignando a la variable "fotos" que tenemos en el prop de grid la variable "imagenes" para que esta tenga las imagenes que necesita
          columnWidth={'150px'} //Esta Variable es el ancho de las columnas
        />
      </main>

    </>
  )
}

export default App
