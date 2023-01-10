import React from 'react'
import Formulario from './formulario'

function Registro(props) {
    const { accionDelClick } = props;
    return (

        <div className ="container-formulario" >
            <h3> Pick a Weapon</h3>
            <Formulario accionDelClick ={accionDelClick}/>
            
        </div>
    )
}

export default Registro;
