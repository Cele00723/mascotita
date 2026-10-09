import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  
  const [nombre, setNombre] = useState(" ");
  const handleSaludo = ()=>{
    //setNombre("Camaron")
  };




  return <Box
      className="text-center"
      component="form"
      noValidate
      autoComplete="off"
    >
  



  
  <div>

  <div className="text-center">
    <h1>Hola mundo {nombre}</h1>
  </div>

  
  <div className="mt-3">
    <TextField variant="outlined" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
  </div>
 

  <div className="mt-3 pt-2">
    <Button onClick={handleSaludo} variant="contained">

      Enviar
    </Button>
  </div>



  
  </div>

  </Box>

}

export default App   
