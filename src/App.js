import './App.css';
import Headers from './components/header/Header';
import Footer from './components/footer/Footer';
import FondoImagen from './components/fondoImagen/FondoImagen';
import CarriucelContenedor from './components/carrucelContenedor/CarriucelContenedor';
import NuevoEquipo from './components/nuevoEquipo/NuevoEquipo';
import NuevoVideo from './components/nuevoVideo/NuevoVideo';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { listaVideosData } from './service/datosServcice';
import { listaEquipoCliente } from './service/equipoService';
import Error404 from './components/error404/Error404';
 
function App() {

  const [cambio, setCambio] = useState(true);
  const [actualizacionPantalla,setactualizarPantalla]=useState(true)
  const [datos, setDatos] = useState([])
  const [equipo, setEquipo] = useState([])
  const [datosVideo,setDatosVideo]=useState([{
    "categoria": "Programacion",
    "titulo": "Inicios de Programacion",
    "video": "https://youtu.be/ra5ojn-Ax7U",
    "imagen": "https://blog.educacionit.com/wp-content/uploads/2018/09/shutterstock-10338536170938-620x354-01.jpg",
    "descripcion": "Primeros pasos para adentrarse al mundo de la programacion ",
    "color":"orange"
  }])

  useEffect(() => {
    mostrarDatos()
    mostarEquipo()
  },[actualizacionPantalla])

  const mostrarDatos=()=>{
    listaVideosData.listaDatos()
    .then(res=>{
       setDatos(res)
    }).catch(error=>console.log(error))
  }
  const mostarEquipo=()=>{
    listaEquipoCliente.listaCliente()
    .then(res=>{
       setEquipo(res)
    }).catch(error=>console.log(error))
  }

  const cambiarImagenVideo=(videoLista)=>{
    setDatosVideo([videoLista])
  }

  const nuevoVideo = () => {
    mostrarDatos()
  }
  const registrarNuevo = (colaborador) => {
    const{categoria,titulo,video,imagen,descripcion}=colaborador
   try {
    listaVideosData.crearDatos(categoria,titulo,video,imagen,descripcion)
    .then(res=>{
      console.log(res)
      actualizar()
    }).catch(error=>console.log(error))
   } catch (error) {
    console.log(error)
   }
    
  }

  const actualizar=()=>{
    setactualizarPantalla(!actualizacionPantalla)
  }

  return (
    <div className="App">
      <BrowserRouter>
       <Headers nuevoVideo={nuevoVideo} cambio={cambio} setcambio={setCambio} />

        <Routes>
          <Route path='/' element={<><FondoImagen datosVideo={datosVideo} />
          <CarriucelContenedor datos={datos} 
          equipo={equipo} 
          cambiarImagenVideo={cambiarImagenVideo}
          actualizar={()=>actualizar()} />
          </>}/>

          <Route path='/nuevoVideo' element={<NuevoVideo registrarNuevo={registrarNuevo}
           equipo={equipo} actualizar={()=>actualizar()} />}/>

          <Route path='/nuevoEquipo' element={<NuevoEquipo equipo={equipo} actualizar={()=>actualizar()}/>}/>

          <Route path='*' element={<Error404 />} />
        </Routes>
       </BrowserRouter>  
      <Footer />
    </div>
  );
}

export default App;
