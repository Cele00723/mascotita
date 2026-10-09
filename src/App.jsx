import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import JuegosForm from './components/JuegosForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import JuegosContainer from './containers/JuegosContainer';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    <>
    <JuegosContainer />
    </>

    </LocalizationProvider>
  )

}

export default App   
