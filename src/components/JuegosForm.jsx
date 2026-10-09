import { Button, Card, CardActions, CardContent, CardHeader, Select, MenuItem, TextField, Switch, FormControlLabel } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react'  

function JuegosForm({onCreateJuego=()=>{}}) {
    const companias = [{label: "Sony", value: "sony"}, {label: "Nintendo", value: "nintendo"}, 
        {label: "Microsoft", value: "microsoft"}];


    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [compania, setCompania] = useState(companias[0].value);
    const [plataforma, setPlataforma] = useState("");
    const [anioLanzamiento, setAnioLanzamiento] = useState(null);
    const [tieneFisico, setTieneFisico] = useState(false);
    
    const limpiarFormulario = () => {
        setNombre("");
        setDescripcion("");
        setCompania(companias[0].value);
        setPlataforma("");
        setAnioLanzamiento(null);
        setTieneFisico(false);
    };

    


    const handleClick = () => {
        const juego = {};
        juego.nombre = nombre;
        juego.descripcion = descripcion;
        juego.compania = compania;
        juego.plataforma = plataforma;
        juego.anioLanzamiento = anioLanzamiento;
        juego.tieneFisico = tieneFisico;

        onCreateJuego(juego);

        limpiarFormulario();
    }


 
  return (
    <Card raised>

        <CardHeader title="Registrar jueguitos"> </CardHeader>
 
        <CardContent> 
            <div className="mt-3">
                <TextField label="Nombre jueguito" fullWidth id="nombre-juego" 
                value={nombre} onChange={(e) => setNombre(e.target.value)}> </TextField>
            </div> 

            <div className="mt-3">
                <TextField fullWidth multiline label="Descripcion" id="desc-juego"
                value={descripcion} onChange={(e) => setDescripcion(e.target.value)}> </TextField>
            </div>

            <div className="mt-3">
                <Select fullWidth id="compania-juego" 
                value={compania} onChange={(e) => setCompania(e.target.value)} label="Compania">

                    {companias.map(c=> <MenuItem value={c.value}> {c.label} </MenuItem>
                    )}
                </Select> 
            </div> 

            <div className="mt-3">
                <TextField value={plataforma} onChange={(e) => setPlataforma(e.target.value)} 
                fullWidth label="Plataforma" id="plataforma-juego"> </TextField>
            </div>

            <div className="mt-3">
                <DatePicker value={anioLanzamiento} onChange={v=>setAnioLanzamiento(v)} 
                fullWidth label="Año de lanzamiento" id="anio-lanzamiento"> </DatePicker>
            </div>


            <div className="mt-3">
                <FormControlLabel checked={tieneFisico} 
                onChange={e=>setTieneFisico(e.target.checked)}
                id="fisico-juego" label="Tiene versión física?" 
                    labelPlacement="start"
                control={<Switch/>}> </FormControlLabel>
            </div>

        </CardContent> 
     


        <CardActions>
            <Button onClick={handleClick} fullWidth variant="outlined" color="secondary"> Botoncito </Button>
        </CardActions>



    </Card>
  )
}

export default JuegosForm
