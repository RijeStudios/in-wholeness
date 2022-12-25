
import { useState, useEffect } from "react";

function useForm() {
    const [values, setValues] = useState({
        userName: '',
        userEmail: '',
        message: ''
    });

    const [errors, setError] = useState({

    })

    const handleChange = e => {
        setValues ({
            ...values,
            [e.target.name] : e.target.value
        })
        console.log(e.target.value);

    };

    const handleSubmit = e => {
        e.preventDefault();
    }

    return {handleChange, values, handleSubmit };

    return(
        <>
        </>
    )
}

export default useForm;