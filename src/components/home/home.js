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
                <h2 className='home__about-title' >WHY <span className='home__about-title-gold' >IN WHOLENESS ?</span> </h2>
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
                        <img src={why} className='home__why-image' />
                    </figure>
                </div>
                <article className='home__why-button-box' >
                        <button className='home__why-button' > WHY IT WORKS</button>
                </article>
            </section>
            
        </main>
    )
}

export default Home;