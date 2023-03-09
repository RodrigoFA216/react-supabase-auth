import React, {useState} from 'react'
import { supabase } from "../supabase/client";

function EvalForm() {
    const [EvalForm, setEvalForm] = useState('')
    const [profesores, setProfesores] = useState('')
    const handleSubbmit=e=>{
        e.preventDefault()
        console.log(EvalForm)
        // supabase.from
    }
    // useEffect(() => {
    //     first
    
    //     return () => {
    //         second
    //     }
    // }, [third])
    
    return (
        <div>
            <form onSubmit={handleSubbmit}>
                <input type="text" name="Profesor" 
                    onChange={(e) => setEvalForm(e.target.value)}/>
                <button>
                    Añadir
                </button>
            </form>
        </div>
    )
}

export default EvalForm