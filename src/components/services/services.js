import why from '../../assets/images/why.jpg';
import nutritionConsult from '../../assets/images/nutritionConsult.jpg';
import training from '../../assets/images/training.jpg';
import lifeCoaching from '../../assets/images/lifeCoaching.jpg';

function Services() {
    return (

        <main className="services" >
           <article>
                <section className="services">
                    <h1>From Illness to Wellness.</h1>
                    <h1>We are committed.</h1>
                    <p>98% of our clients see a transformation in the first 6 months *</p>
                </section>
                <figure>
                    <img src={why} alt='services by in wholeness'  />
                </figure>
           </article>

           <div className='home__line-box' >
                <div className='home__line'></div>
            </div>

            <section>
                <h2>SERVICES <span> WE PROVIDE</span></h2>
            </section>

            <article>
                <section>
                    <figure className='' >
                        <img src={nutritionConsult} className='' alt='man searching for nutritionist' />
                    </figure> 
                    <h3 className='' >Nutrition Consult:</h3>
                    <h4 className='' >
                        Get a personalized diet plan using 
                        genetic testing to understand your digestive health.
                    </h4>
                    <h5> Target areas: Food allergies, IBD, Fertility, Pregnancy,
                         Post partum Weight loss, Diabetes, Hormonal health, Meal planning,
                         Genetic testing
                    </h5>
                    <section>
                        <a>BOOK APPOINTMENT</a>
                    </section>
                </section>

                <section>
                    <figure className='' >
                        <img src={training} className='' alt='person doing personalised workout' />
                    </figure> 
                    <h3 className='' >Personal Training:</h3>
                    <h4 className='' >
                        Get access to our digital vault of targeted exercise plans
                        to help you fall in love with movement again. 
                    </h4>
                    <h5> Target areas: Weight loss & management, Personalized nutrition,
                         Fitness plans
                    </h5>
                    <section>
                        <a>BOOK APPOINTMENT</a>
                    </section>
                </section>

                <section>
                    <figure className='' >
                        <img src={lifeCoaching} className='' alt='person doing a life coaching session' />
                    </figure> 
                    <h3 className='' >Life Coaching:</h3>
                    <h4 className='' >
                        Connect the dots between your body and mind and learn how
                        to balance nutrition and mental wellness.
                    </h4>
                    <h5> Target areas: Anxiety, Depression, Post partum Depression,
                         Stress, Burnout, Mental support
                    </h5>
                    <section>
                        <a>BOOK APPOINTMENT</a>
                    </section>
                </section>

            </article>
        </main>
    )
}

export default Services;