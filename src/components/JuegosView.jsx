import { Card, Paper, CardContent, CardHeader, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Alert } from '@mui/material'
import React from 'react'

function JuegosView({juegos=[]}) {

    if(!juegos?.length) {
        return <Alert severity="info"> No hay juegos registrados </Alert>
    }

  return (

    <Card>
        <CardHeader title="Lista de juegos">  </CardHeader>

        <CardContent>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell>Plataforma</TableCell>
                            <TableCell>Compania</TableCell>
                            <TableCell>¿Tiene físico?</TableCell>
                            <TableCell>Año de lanzamiento</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {juegos.map((j)=>
                            <TableRow key={j.nombre}>
                                <TableCell> {j.nombre} </TableCell>
                                <TableCell> {j.descripcion} </TableCell>
                                <TableCell> {j.plataforma} </TableCell>
                                <TableCell> {j.compania} </TableCell>
                                <TableCell> {j.tieneFisico ? "Sí" : "No"} </TableCell>
                                <TableCell> {j.anioLanzamiento.year()} </TableCell>
                            </TableRow>
                        )}

                    </TableBody>

                </Table>
            </TableContainer>
        </CardContent>



    </Card>
  )
}

export default JuegosView
