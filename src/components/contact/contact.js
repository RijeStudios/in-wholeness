import { useState } from "react";
import ContactForm from "./contactForm";
import ContactSuccess from "./ContactSuccess";
import './contact.scss';

function Contact() {
const [submit, setSubmit] = useState(false);

const submitForm = () => {
    setSubmit(true);
}

    return (
        <main className="contact" >
           {!submit ? <ContactForm submitForm={submitForm} /> : <contactSuccess/>}
           
        </main>
    )
}

export default Contact;