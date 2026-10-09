import { Button, Card, CardActions, CardContent, CardHeader, Select, MenuItem, TextField, Switch, FormControlLabel } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';
import React from 'react'  

function JuegosForm() {
    const companias = [{label: "Sony", value: "sony"}, {label: "Nintendo", value: "nintendo"}, 
        {label: "Microsoft", value: "microsoft"}];

        


  return (
    <Card raised>

        <CardHeader title="Registrar jueguitos"> </CardHeader>

        <CardContent> 
            <div className="mt-3">
                <TextField label="Nombre jueguito" fullWidth id="nombre-juego"> </TextField>
            </div>

            <div className="mt-3">
                <TextField fullWidth multiline label="Descripcion" id="desc-juego"> </TextField>
            </div>

            <div className="mt-3">
                <Select fullWidth id="compania-juego" label="Compania">
                    {companias.map((c)=> 
                        <MenuItem value={c.value}> {c.label} </MenuItem>
                    )}
                </Select>
            </div> 

            <div className="mt-3">
                <TextField fullWidth label="Plataforma" id="plataforma-juego"> </TextField>
            </div>

            <div className="mt-3">
                <DatePicker fullWidth label="Año de lanzamiento" id="anio-lanzamiento"> </DatePicker>
            </div>


            <div className="mt-3">
                <FormControlLabel id="fisico-juego" label="Tiene versión física?" 
                    labelPlacement="start"
                control={<Switch/>}> </FormControlLabel>
            </div>

        </CardContent> 
     


        <CardActions>
            <Button fullWidth variant="outlined" color="secondary"> Botoncito </Button>
        </CardActions>



    </Card>
  )
}

export default JuegosForm
