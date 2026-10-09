import React from 'react'
import JuegosForm from '../components/JuegosForm'



function JuegosContainer() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-4">

                <JuegosForm/>               

            </div>

            <div className="col-8">
            <h1>Aquí va la tabla chiquilles</h1>
            </div>


        </div>
    </div>
  )
}

export default JuegosContainer
