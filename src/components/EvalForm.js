import React, { useState } from 'react'
import ListCategory from "./ListCategory";

function EvalForm() {
    const [EvalName, setEvalName] = useState('')
    // const [profesores, setProfesores] = useState('')
    const handleSubbmit = e => {
        e.preventDefault()
        console.log(EvalName)
    }
    return (
        <div>
            <form onSubmit={handleSubbmit}>
                <input type="text" name="Profesor" placeholder='Escribe el nombre del profesor a evaluar'
                    onChange={(e) => setEvalName(e.target.value)} />
                <button>
                    Añadir
                </button>
            </form>
            <br />
            <ListCategory />
        </div>
    )
}

export default EvalForm