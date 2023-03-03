import { useState } from "react";
import ContactForm from "./contactForms";
import './contact.scss';

function Contact() {
const [_submit, setSubmit] = useState(false);

const submitForm = () => {
    setSubmit(true);
}

    return (
        <main className="contact" >
           <ContactForm submitForm={submitForm} />
           
        </main>
    )
}

export default Contact;