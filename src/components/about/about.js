import work from '../../assets/images/work.jpg';
import why from '../../assets/images/why.jpg' ;
import smile from '../../assets/images/smile.jpg';
function About() {

  return (
    <main>
        <section >
            <h1>A Holistical & Clinical approach</h1>
                <h2> In Wholeness uses a holistic approach to get the full 
                picture of your health. We use genetic tests to ensure
                your plan is tailored to your needs.
                </h2>
        </section>
        <section>
            <figure>
                <img src={work} alt='woman searching for nutritionist' />
            </figure> 
            <h3>
                WHO ARE YOU?
            </h3>
            <h4>
                We spend time getting to know you by genetic testing,
                lifestyle history, diet analysis and future goals.
            </h4>
        </section>
        <section>
           <figure>
            <img src={why} alt='nutritionist planning diet plan' />
           </figure>
           <h3>
                WHAT IS THE ROOT CAUSE?
            </h3>
            <h4>
                Using the latest tools and practices, we identify the root cause of your condition 
                and create a personalised care plan.
            </h4>
        </section>
        <section>
            <figure>
                <img src={smile} alt='a happy client after a nutrition plan is made' />
            </figure>
            <h3>
               We partner with you 
            </h3>
            <h4>
                Using check-ins and unlimited support.
                We are with you, even when it gets hard
            </h4>
        </section>
    </main>
  );
}

export default About;