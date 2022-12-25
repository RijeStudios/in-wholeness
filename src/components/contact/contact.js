import { useEffect } from "react";
import './contact.scss';
import { FiArrowRight} from 'react-icons/fi';
import useForm from "./useForm";

function Contact() {
    const {handleChange, values, handleSubmit } = useForm();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

     
      return (
        <main className="contact" >
            <h3 className="contact__title" >Let's talk</h3>
            <form onSubmit={handleSubmit}  >
                <section>
                    <label htmlFor='Name'  >
                        Name
                    </label>
                    <input 
                         type='text' 
                         name='userName'
                         id='userName'
                         placeholder='Enter your name' 
                         className=''
                         value={values.userName}
                         onChange={handleChange}
                         />
                </section>
                <section>
                    <label htmlFor='Email'  >
                        Email
                    </label>
                    <input 
                         type='email' 
                         name='userEmail'
                         id='userEmail'
                         placeholder='Enter your email' 
                         className=''
                         value={values.userEmail}
                         onChange={handleChange}
                         />
                </section>
                <section>
                    <label>
                        Message
                    </label>
                    <textarea
                     placeholder='I want to work with you'
                     type='text'
                     name='message'
                     id='message'
                     value={values.message}
                     onChange={handleChange}
                     >

                    </textarea>
                </section>
                <section>
                    <a href='#'> Let's talk <FiArrowRight/> </a>
                </section>
            </form>
        </main>
      )
}

export default Contact;