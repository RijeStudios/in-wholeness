import React, {useState} from 'react';
import { FaqItems } from './faqItems';
 import './faqItem.scss';
import { IconContext } from 'react-icons';
import {FiPlus, FiMinus } from 'react-icons/fi';



function FaqItem() {

    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if(clicked === index) {
            //if clicked is already active then close
            return setClicked(null);
        }
        setClicked(index);
    }

    return (
        <IconContext.Provider value={{color:'#fff', size:'2rem' }} >
            <main className='accordion' >
                <section className='accordion__body' >
                    {FaqItems.map((item, index) => {
                        return (
                            <article className='accordion__item' >
                                <section className='accordion__header' onClick={() => toggle(index)} key={index} >
                                    <h2 className='accordion__title' >{item.title}</h2>
                                    <span> {clicked === index ? <FiMinus/> : <FiPlus/> } </span>
                                </section>
                                {clicked === index ? (
                                  <article className='accordion__dropdown' >
                                      <p className='accordion__content' >{item.content}</p>
                                  </article>
                                ) : null }
                              
                            </article>
                        )
                    } )}
                </section>

            </main>
        </IconContext.Provider>
    )
}

export default FaqItem;