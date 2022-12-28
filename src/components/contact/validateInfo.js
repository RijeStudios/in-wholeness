
export default function validateInfo (values) {

    let errors = {}
    // validate username including any
    // whitespace they might have added
    if(!values.userName.trim()) {
        errors.userName = 'User name required';
    }

    if (!values.userEmail) {
        errors.userEmail = 'Email required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail))
     {
        errors.userEmail = 'Email address is invalid';
    }

    if(!values.message) {
        errors.message = 'Please enter message';
    };

    console.log(errors);
    return errors;

}