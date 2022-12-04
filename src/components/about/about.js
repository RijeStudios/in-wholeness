import work from '../../assets/images/work.jpg';
import why from '../../assets/images/why.jpg' ;
import smile from '../../assets/images/smile.jpg';
import christie from '../../assets/images/christie.jfif';
import './about.scss';
import { useEffect } from 'react';

function About() {
useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <main className='about' >

        <section className='about__header' >
            <h1 className='about__title' >A Holistical and Clinical approach</h1>
                <h2 className='about__company' > In Wholeness uses a holistic approach to get the full 
                picture of your health. We use genetic tests to ensure
                your plan is tailored to your needs.
                </h2>
        </section>

    <article className='about__row' >
        <section className='about__work ' >
            <figure className='about__image-box' >
                <img src={work} className='about__image' alt='woman searching for nutritionist' />
            </figure> 
            <h3 className='about__who' > WHO ARE YOU?</h3>
            <h4 className='about__who-info' >
                We spend time getting to know you by genetic testing,
                lifestyle history, diet analysis and future goals.
            </h4>
        </section>

        <section className='about__work' >
           <figure className='about__image-box' >
            <img src={why} className='about__image' alt='nutritionist planning diet plan' />
           </figure>
           <h3 className='about__what'> WHAT IS THE ROOT CAUSE?</h3>
            <h4 className='about__what-info'>
                Using the latest tools and practices, we identify the root cause of your condition 
                and create a personalised care plan.
            </h4>
        </section>
    </article>

        <section className='about__work' >
            <figure className='about__image-box' >
                <img src={smile} className='about__image about__image-smile' alt='a happy client after a nutrition plan is made' />
            </figure>
            <h3 className='about__partner'> WE PARTNER WITH YOU </h3>
            <h4 className='about__partner-info' >
                Using check-ins and unlimited support.
                We are with you, even when it gets hard
            </h4>
        </section>

        <section className='about__button-box'>
            <a className='about__button' > BOOK APPOINTMENT</a>
        </section>

        <article className='about__founder' >
            <h2 className='about__founder-title' >ABOUT <span className='about__founder-title--gold'>OUR FOUNDER</span></h2>

            <section className='about__founder-box' >
                    <figure className='about__image-box'>
                        <img src={christie} className='about__image-founder' alt='founder of In wholeness' />
                    </figure>

                <section className='about__qualifications' >
                    <h3 className='about__ceo' > Christie Noua is a board certified nutritionist, personal coach and
                        registered psychotherapist (qualifying).
                    </h3>
                    <h4 className='about__clinical' >Clinical expertise:</h4>
                    <h5 className='about__clinical-tags'>Digestive health, Endocrine disorders,
                        Hormonal and Mental issues
                    </h5>
                </section>

            </section>
            
        </article>

    </main>
  );
}

export default About;