import { useEffect } from "react";
import './contact.scss';
import { FiArrowRight} from 'react-icons/fi';


function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      return (
        <main className="contact" >
            <h3 className="contact__title" >Let's talk</h3>
            <form>
                <section>
                    <label htmlFor='Name'  >
                        Name
                    </label>
                    <input 
                         type='text' 
                         name='username'
                         id='username'
                         placeholder='Enter your name' 
                         className=''
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
                         />
                </section>
                <section>
                    <label>
                        Message
                    </label>
                    <textarea placeholder='I want to work with you' >

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