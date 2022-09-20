import React from 'react';
import { useState } from 'react';

const Ej1a3 = ({texto}) => {
    let [mostrarTexto, setMostrarTexto] = useState("")
    return (
        <>
            <h1>Hello world</h1>
            <h1>Hello {texto} {mostrarTexto}</h1>
            <button className='btn1' onClick={()=>setMostrarTexto(mostrarTexto='(from changed state)!')}>Mostrar texto</button>
            <button className='btn2' onClick={()=>setMostrarTexto(mostrarTexto='')}>Quitar texto</button>
        </>
    );
};

export default Ej1a3;