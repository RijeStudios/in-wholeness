
export default function validateInfo (values) {

    let errors = {}
    // validate username including any
    // whitespace they might have added
    if(!values.user_name.trim()) {
        errors.user_name = 'User name required';
    }

    if (!values.user_email) {
        errors.user_email = 'Email required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email))
     {
        errors.user_email = 'Email address is invalid';
    }

    if(!values.message) {
        errors.message = 'Please enter message';
    };

    console.log(errors);
    return errors;

}