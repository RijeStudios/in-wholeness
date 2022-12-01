import work from '../../assets/images/work.jpg';
import why from '../../assets/images/why.jpg' ;
import smile from '../../assets/images/smile.jpg';
import christie from '../../assets/images/christie.jfif';
import './about.scss';
function About() {

  return (
    <main className='about' >
        <section className='about__header' >
            <h1 className='about__title' >A Holistical & Clinical approach</h1>
                <h2 className='about__company' > In Wholeness uses a holistic approach to get the full 
                picture of your health. We use genetic tests to ensure
                your plan is tailored to your needs.
                </h2>
        </section>


        <section className='about__work' >
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
            <h4>
                Using the latest tools and practices, we identify the root cause of your condition 
                and create a personalised care plan.
            </h4>
        </section>


        <section>
            <figure className='about__image-box' >
                <img src={smile} className='about__image' alt='a happy client after a nutrition plan is made' />
            </figure>
            <h3>
               We partner with you 
            </h3>
            <h4>
                Using check-ins and unlimited support.
                We are with you, even when it gets hard
            </h4>
        </section>
        <section>
            <a> BOOK APPOINTMENT</a>
        </section>
        <article>
            <h2>ABOUT <span>OUR FOUNDER</span></h2>
            <figure>
                <img src={christie} alt='founder of In wholeness' />
            </figure>
            <h3> Christie Noua is a board certified nutritionist, personal coach and
                registered psychotherapist(qualifying).
            </h3>
            <h4>Clinical expertise:</h4>
            <h5>Digestive health, endocrine disorders
                hormonal and mental issues
            </h5>
        </article>
    </main>
  );
}

export default About;