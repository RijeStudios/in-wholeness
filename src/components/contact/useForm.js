import { useState, useEffect } from "react";


const useForm = (callback, validateInfo) => {
    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleChange = e => {
        setValues ({
            ...values,
            [e.target.name] : e.target.value
        })
        console.log(e.target.value);

    };


    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        setSubmit(true);
        
    }

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && submit) {
            callback = () => {
                console.log('no more errors')
            };
        }
    }, [errors] );

    return {handleChange, values, handleSubmit, errors };

    // return(
    //     <>
    //     </>
    // )
}

export default useForm;