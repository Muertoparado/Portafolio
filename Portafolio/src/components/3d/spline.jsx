/*
import Spline from '@splinetool/react-spline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
//import SplineOptimized from './splineopti.jsx';

export default function Circuit() {
  return (
    
      <Box className='size' >
        <Spline scene="https://prod.spline.design/JbZeqcYK7gvFEGaN/scene.splinecode"   />
      </Box>
    
  );
} */
  /*
  return (
    <Container>
      <SplineOptimized />
    </Container>
  )*/

  import React, { lazy, Suspense } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// Utilizando React.lazy para cargar el componente de forma perezosa
const LazySpline = lazy(() => import('@splinetool/react-spline'));

// Manejando el error de carga del modelo
const ErrorFallback = () => (
  <div>
    <p>Ocurrió un error al cargar el modelo 3D.</p>
  </div>
);

const Circuit = () => {
  return (
    <Container>
      {/* Suspense para mostrar un fallback mientras se carga el componente */}
      <Suspense fallback={<div>Loading...</div>} >
        <Box className='size'>
          {/* Renderiza el componente 3D solo cuando es necesario */}
          <LazySpline scene="https://prod.spline.design/JbZeqcYK7gvFEGaN/scene.splinecode" />
        </Box>
      </Suspense>
    </Container>
  );
};

export default Circuit;


