import Navbar from "../navbar/navbar.jsx";
import Circuit from "../3d/spline.jsx";
import Box from '@mui/material/Box';
import Presentacion from "../presentacion/presentacion.jsx";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './home.css';
import NFTCard from "../3d/cards/cards.jsx";
function Home() {
  return (
    <Box>
       <Box style={{ width: '98.9vw', height: '100vh' }}>
      <Navbar />
      <Presentacion />
      </Box>
      <Container className="border-top" maxWidth="lg">
      <h1>
        About Me
      </h1>
      <Grid container alignItems="stretch" style={{height: '100%'}}>

    <Grid item xs={6} >
    <Circuit className="margin-top" />
              <p>*Al presionar los pulsadores se enciende el led*</p>
    </Grid>

    <Grid item xs={6}>
      <p style={{height: '100%'}}> Soy Ingeniero electrónico con especialización en desarrollo web, me he enfocado en convertirme en un desarrollador full-stack sólido con gran capacidad para resolver problemas complejos. Inicialmente me formé como ingeniero electrónico, donde adquirí sólidas capacidades analíticas para resolver problemas técnicos. Sin embargo, al final de mi carrera descubrí una pasión por el desarrollo web. Esto me llevó a enfocarme en lenguajes tales como JavaScript, Node.js, Express, bases de datos SQL y NoSQL, así como React para front-end.

Tengo amplia experiencia construyendo aplicaciones web escalables desde cero hasta producción, incluyendo prototipado, diseño de bases de datos optimizadas, desarrollo de API, integraciones con servicios de terceros, optimización y despliegue. Hoy en día estoy especialmente interesado en proyectos de IoT y desarrollo de dispositos basados a los requerimientos segun su necesidad.

Me considero un ávido resolutor de problemas, constantemente buscando nuevos retos que me obliguen a salir de mi zona de confort y aprender cosas nuevas. Disfruto especialmente descifrando problemas técnicos complejos mediante un enfoque metódico e innovador. Mi sólida formación en ingeniería combinada con mis habilidades de programación web hace que pueda abordar proyectos desafiantes de manera única.
        </p> 
    </Grid>
  </Grid>

      </Container>

      <Container>
        <h1>Proyects</h1>
        <NFTCard/>
      </Container>
    </Box>
   
    
  );
}

export default Home;
