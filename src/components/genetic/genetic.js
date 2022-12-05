import lifeCoaching from '../../assets/images/lifeCoaching.jpg';
import geneticTesting from '../../assets/images/geneticTesting.jpg';
import nutritionConsult from '../../assets/images/nutritionConsult.jpg';
import { useEffect } from 'react';
import './genetic.scss';

function Genetic() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <main className='genetic' >
           <article className='genetic__header-box' >
                <section className='genetic__header' >
                    <h1 className='genetic__header-title' > The power of your genes unlocked</h1>
                    <h3 className='genetic__header-description' >It's not easy to spot what is wrong
                        but with genetic testing, you can connect the dots.
                    </h3>
                </section>
                
                    <figure className='genetic__header-image-box'>
                        <img src={lifeCoaching} className='genetic__header-image'  alt='genetic testing' />
                    </figure>
                
           </article>

           <div className='home__line-box' >
                <div className='home__line'></div>
            </div>

            <section className='genetic__reason-header-box' >
                    <h2 className='genetic__reason-title' >GENETIC <span className='genetic__reason-title--gold' > TESTING</span></h2>
            </section>

            <article className='genetic__reasons' >
                <section className='genetic__reason-box' >
                    <h3 className='genetic__reason-header' > Common reasons to seek genetic testing:</h3>
                    <ul className='genetic__reason-list' >
                        <li className='genetic__reason-item' >Chronic Pain</li>
                        <li className='genetic__reason-item' >Fatigue, Stress & Burnout</li>
                        <li className='genetic__reason-item' >Insomnia or Sleeping Issues</li>
                        <li className='genetic__reason-item' >Weight management</li>
                        <li className='genetic__reason-item' >Hormonal Imbalances</li>
                        <li className='genetic__reason-item' >Depression, Anxiety & Mood swings</li>
                    </ul>
                    <section className='genetic__reason-button-box' >
                        <a className='genetic__reason-button' > VIEW SAMPLE REPORT</a>
                    </section>

                </section>

                <figure className='genetic__reason-image-box' >
                    <img src={geneticTesting} className='genetic__reason-image' alt='genetic test results' />
                </figure>

            </article>

            <article className='genetic__reasons-hormone' >
                <figure className='genetic__result-image-box' >
                    <img src={nutritionConsult} className='genetic__result-image'  alt='comprehensive genetic test results' />
                </figure>
                <section className='genetic__hormone-box' >
                    <h3 className='genetic__hormone-title' >Hormonal Health:</h3>
                    <h5 className='genetic__hormone-results' > Using your test results we can assess
                         your issues & create a holistic and personalised plan 
                         that will move you towards wellness.
                    </h5>
                    <section className='genetic__hormone-button-box' >
                        <a className='genetic__hormone-button' > BOOK CONSULT</a>
                    </section>
                </section>
            </article>

            <article className='genetic__question-box' >
                <h2 className='genetic__questions' > Still have questions?</h2>
                <section className='genetic__hormone-question-box' > 
                    <a className='genetic__question-button' >SCHEDULE A CALL</a>
                </section>
            </article>
        </main>
    )
}

export default Genetic;