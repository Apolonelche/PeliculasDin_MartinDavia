import './index.css'
import Contenedor from './Contenedor.jsx'
import Interprete from "./Interprete.jsx"
import peliculas from './data/peliculas.js'


function App() {

  return (
    <>
      <h1 className='contenedor__h1'>Mis Intérpretes</h1>
      <Contenedor>
         {peliculas.filter(pelicula => pelicula.clasificacion === "Drama").map((pelicula) =>  
        pelicula.actores.map((interprete, index) =>
          <Interprete 
            key={index}
            nombre={interprete.nombre} 
            foto={interprete.imagen}
            esNota10={pelicula.nota === 10}
          >
            {interprete.biografia}
          </Interprete>
        ))
        }
      
      </Contenedor>
    </>
  )
}

export default App
