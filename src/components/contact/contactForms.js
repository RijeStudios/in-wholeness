import { useEffect, useState, useRef } from "react";
import './contactForm.scss';
import { FiArrowRight} from 'react-icons/fi';
import letsTalk from '../../assets/images/lets-talk.png';
import contactForm from '../../assets/images/contact-form.png';
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import emailjs from '@emailjs/browser';


function ContactForm(submitForm) {
    const {handleChange, values, handleSubmit, errors } = useForm(submitForm,validateInfo);

  
    const [toSend, setToSend] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

     useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const form = useRef();

      const handleEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3zfy7cf', 'template_cvdjwu4', form.current, 'aOZ4zfpvPs1rRjWQg')
      .then((result) => {
          console.log(result.text);
          setToSend({
            user_name: '',
            user_email: '',
            message: '',
          });
          alert('Thank you for your email! I will reach out to you as soon as possible');
      }, (error) => {
          console.log(error.text);
      });
     
      }

      return (
        <main className="contact" >
            <section className="contact__title-box" >
                <img src={letsTalk} className="contact__title" alt='contact header' />
            </section>
            <form ref={form} onClick={handleSubmit} onSubmit={handleEmail}  className='contact__form'  >
                <section className='contact__image-box' >
                    <img src={contactForm} className='contact__image' alt='contact form box' />
                </section>

                <article className='contact__form-box' >
                    <section className='contact__name-box' >
                        <label htmlFor='Name' className='contact__name'  >
                            Name*
                        </label>
                        <input 
                            type='text' 
                            name='user_name'
                            id='userName'
                            placeholder='Enter your name' 
                            className='contact__name-input'
                            value={values.user_name}
                            onChange={handleChange}
                        />
                        {errors.user_name && <p className='contact__error-name' >{errors.user_name}</p> }
                    </section>
                    <section className='contact__email-box' >
                        <label htmlFor='Email' className='contact__email'  >
                            Email*
                        </label>
                        <input 
                            type='email' 
                            name='user_email'
                            id='userEmail'
                            placeholder='Enter your email' 
                            className='contact__email-input'
                            value={values.user_email}
                            onChange={handleChange}
                        />
                        {errors.user_email && <p className='contact__error-email' >{errors.user_email}</p> }
                    </section>
                    <section className='contact__message-box' >
                        <label htmlFor='' className='contact__message' >
                            Message*
                        </label>
                        <textarea
                        placeholder='I want to work with you'
                        type='text'
                        name='message'
                        id='message'
                        value={values.message}
                        className='contact__message-input'
                        onChange={handleChange}
                        >
                        </textarea>
                        {errors.message && <p className='contact__error-message' >{errors.message}</p> }
                    </section>
                    <section className='contact__button-box' >
                        <button href='#' onClick={handleEmail} className='contact__button' > Let's talk <FiArrowRight/> </button>
                    </section>
                </article>
                
            </form>
        </main>
      )
}

export default ContactForm;