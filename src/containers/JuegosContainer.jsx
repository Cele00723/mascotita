import React, { useState } from 'react'
import JuegosForm from '../components/JuegosForm'
import JuegosView from '../components/JuegosView';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



function JuegosContainer() {

    const [juegos, setJuegos] = useState([]);
    const [alertaVisible, setAlertaVisible] = useState(false);



    const handleCreate = (juego) => {
        setJuegos([...juegos, juego]);
        setAlertaVisible(true);
    };



  return (
    <>
    <div className="container">
        <div className="row">

            <div className="col-4">
                <JuegosForm onCreateJuego={handleCreate} />               
            </div>

            <div className="col-8">
                <JuegosView juegos={juegos}> </JuegosView>
            </div>
 
        </div>
    </div>

    <Snackbar open={alertaVisible} autoHideDuration={1000}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Funciono chiquilles!
        </Alert>
    </Snackbar>

   </>
  )
}

export default JuegosContainer
