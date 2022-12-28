import { useEffect, useState } from "react";
import './contactForm.scss';
import { FiArrowRight} from 'react-icons/fi';
import letsTalk from '../../assets/images/lets-talk.png';
import contactForm from '../../assets/images/contact-form.png';
import useForm from "./useForm";
import validateInfo from "./validateInfo";


function ContactForm(submitForm) {
    const {handleChange, values, handleSubmit, errors } = useForm(submitForm,validateInfo);

  

     useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

     
      return (
        <main className="contact" >
            <section className="contact__title-box" >
                <img src={letsTalk} className="contact__title" alt='contact header' />
            </section>
            <form onSubmit={handleSubmit} className='contact__form'  >
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
                            name='userName'
                            id='userName'
                            placeholder='Enter your name' 
                            className='contact__name-input'
                            value={values.userName}
                            onChange={handleChange}
                        />
                        {errors.userName && <p className='contact__error-name' >{errors.userName}</p> }
                    </section>
                    <section className='contact__email-box' >
                        <label htmlFor='Email' className='contact__email'  >
                            Email*
                        </label>
                        <input 
                            type='email' 
                            name='userEmail'
                            id='userEmail'
                            placeholder='Enter your email' 
                            className='contact__email-input'
                            value={values.userEmail}
                            onChange={handleChange}
                        />
                        {errors.userEmail && <p className='contact__error-email' >{errors.userEmail}</p> }
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
                        <button href='#' className='contact__button' > Let's talk <FiArrowRight/> </button>
                    </section>
                </article>
                
            </form>
        </main>
      )
}

export default ContactForm;