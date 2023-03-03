import why from '../../assets/images/why.jpg';
import nutritionConsult from '../../assets/images/nutritionConsult.jpg';
import training from '../../assets/images/training.jpg';
import lifeCoaching from '../../assets/images/lifeCoaching.jpg';
import './services.scss';
import { useEffect } from 'react';

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (

        <main className="services" >
           <article className='services__header-box' >
                <section className="services__header">
                    <h1 className='services__title' >From Illness to Wellness.</h1>
                    <h1 className='services__title' >We are committed.</h1>
                    <p className='services__study' >98% of our clients see a transformation in the first 6 months *</p>
                </section>
                <figure className='services__image-box services__promise' >
                    <img src={why} className='services__header-image' alt='services by in wholeness'  />
                </figure>
           </article>

           <div className='home__line-box' >
                <div className='home__line'></div>
            </div>

            <section className='services__title-box' >
                <h2 className='services__title-header' >SERVICES <span className='services__title-header--gold' > WE PROVIDE</span></h2>
            </section>

            <article className='services__service' >
                <section className='services__row' >
                    <figure className='services__image-box' >
                        <img src={nutritionConsult} className='services__image-consult' alt='man searching for nutritionist' />
                    </figure> 
                    <h3 className='services__type' >Nutrition Consult:</h3>
                    <h4 className='services__description' >
                        Get a personalized diet plan using 
                        genetic testing to understand your digestive health.
                    </h4>
                    <h5 className='services__tag' > Target areas: Food allergies, IBD, Fertility,
                         Post partum Weight loss, Diabetes, Hormonal health, Meal planning,
                         Genetic testing
                    </h5>
                    <section className='services__button-box' >
                        <a className='services__button' href='https://inwholeness.janeapp.com/' target='_blank' >BOOK APPOINTMENT</a>
                    </section>
                </section>

                <section className='services__row' >
                    <figure className='services__image-box' >
                        <img src={training} className='services__image' alt='person doing personalised workout' />
                    </figure> 
                    <h3 className='services__type' >Personal Training:</h3>
                    <h4 className='services__description' >
                        Get access to our digital vault of targeted exercise plans
                        to help you fall in love with movement again. 
                    </h4>
                    <h5 className='services__tag' > Target areas: Weight loss & management, Personalized nutrition,
                         Fitness plans
                    </h5>
                    <section className='services__button-box' >
                        <a className='services__button' href='https://inwholeness.janeapp.com/' target='_blank' >BOOK APPOINTMENT</a>
                    </section>
                </section>

                <section className='services__row' >
                    <figure className='services__image-box' >
                        <img src={lifeCoaching} className='services__image' alt='person doing a life coaching session' />
                    </figure> 
                    <h3 className='services__type' >Life Coaching:</h3>
                    <h4 className='services__description' >
                        Connect the dots between your body and mind and learn how
                        to balance nutrition and mental wellness.
                    </h4>
                    <h5 className='services__tag' > Target areas: Anxiety, Depression, Post partum Depression,
                         Stress, Burnout, Mental support
                    </h5>
                    <section className='services__button-box' >
                        <a className='services__button' href='https://inwholeness.janeapp.com/' target='_blank' >BOOK APPOINTMENT</a>
                    </section>
                </section>

            </article>
        </main>
    )
}

export default Services;