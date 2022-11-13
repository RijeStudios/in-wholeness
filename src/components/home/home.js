import smile from '../../assets/images/smile.jpg';
import why from '../../assets/images/why.jpg' ;
import './home.scss'
function Home() {
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
                        <button className='home__button' > BOOK APPOINTMENT</button>
                    </article>
                </div>
               
            </section>
            <div className='home__line' ></div>
            <section className='home__about' >
                <h2>WHY <span>IN WHOLENESS ?</span> </h2>
                <article>
                    <ul>
                        <li>Access to Coaching and Courses</li>
                        <li>Scientific & Holistic approach</li>
                        <li>Get support via pur Fitness, Nutrition & Psychotherapy programs</li>
                        <li>Personalized Nutrition & more</li>
                    </ul>
                </article>
                <article>
                    <button> WHY IT WORKS</button>
                </article>
                <figure>
                    <img src={why} className='' />
                </figure>
            </section>
            
        </main>
    )
}

export default Home;