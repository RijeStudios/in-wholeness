import smile from '../../assets/images/smile.jpg';
import why from '../../assets/images/why.jpg' ;
import './home.scss';
import Testimonials from '../testimonials/testimonials';
import {useEffect} from 'react';
import {Link} from "react-router-dom";


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
        <main className='home' >
            <section className='home__hero' > 
                <figure className='home__hero-box' >
                    <img src={smile} className='home__hero-image' alt='healthy woman smiling because her condition has transformed' />
                </figure>

                <div className='home__main-box' > 
                    <article className='home__text-box' >
                        <h1 className='home__hero-title' >Take charge of your gut health!</h1>
                        <p className='home__hero-text' >Do you feel like no matter what diet plan you
                            try, your condition doesn't improve?
                        </p>
                        <p className='home__hero-text' >Talk to our specialists to transform your life
                            from illness to wholeness.
                        </p>
                    </article>
                    <article className='home__button-box' >
                        <a href='https://inwholeness.janeapp.com/' target='_blank' >
                            <button className='home__button' > BOOK APPOINTMENT</button>
                        </a>
                    </article>
                </div>
               
            </section>
            <div className='home__line-box' >
                <div className="home__line"></div>
            </div>
            <section className='home__about' >

                <div>
                <h2 className='home__about-title' >WHY <span className='home__about-title-gold' >IN WHOLENESS ?</span> </h2>
                </div>

                <div className='home__about-box' >   
                    <article>
                        <ul className='home__list' >
                            <li className='home__list-item' >Access to Fitness programs</li>
                            <li className='home__list-item' >Scientific & Holistic approach</li>
                            <li className='home__list-item' >Support via Life Coaching</li>
                            <li className='home__list-item' >Personalized Nutrition plan </li>
                        </ul>
                    </article>
                    <figure className='home__why-box' >
                        <img src={why} className='home__why-image' alt='about in wholeness' />
                    </figure>
                </div>
                
                <article className='home__why-button-box' >
                    <Link to='/about' >
                        <button className='home__why-button' > WHY IT WORKS</button>
                    </Link>
                </article>
            </section>
            <Testimonials/>
            <section className='home__indigenous' >
                <h3 className='home__indigenous-title'> INDIGENOUS LAND <span className='home__about-title-gold' >ACKNOWLEDGEMENT</span></h3>
                <p className='home__indigenous-text' > We acknowledge the traditional custodians of the land
                    on which we work and live. We pay our respects to Elders 
                    past, present and emerging. We acknowledge that sovereignty was never 
                    ceded and pay our respects to the First Nations people of this country and to their cultures,
                    and to Elders both past and present.
                </p>
            </section>
            
        </main>
    )
}

export default Home;