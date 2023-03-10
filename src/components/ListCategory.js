import React, { useState, useEffect } from 'react'
import { supabase } from "../supabase/client";

function ListCategory() {
    const [preguntas, setPreguntas] = useState('')
    useEffect(() => {
        async function takeData() {
            let { data: PreguntasSaes, error } = await supabase.from('PreguntasSaes').select('*')
            setPreguntas(PreguntasSaes, error)
            console.log(PreguntasSaes, error);
        }
        takeData();
    }, [])
    return (
        <div>
            <h3>Categorías a evaluar</h3>
        </div>
    )
}

export default ListCategory