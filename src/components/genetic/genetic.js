import lifeCoaching from '../../assets/images/lifeCoaching.jpg';

function Genetic() {
    return (
        <main>
           <article>
                <section>
                    <h1> The power of your genes unlocked</h1>
                    <h3>It's not easy to spot what is wrong
                        but with genetic testing, you can connect the dots.
                    </h3>
                </section>
                <section>
                    <figure>
                        <img src={lifeCoaching} alt='genetic testing' />
                    </figure>
                </section>
           </article>
           <div className='home__line-box' >
                <div className='home__line'></div>
            </div>
            <article>
                <section>
                    <h2>GENETIC <span> TESTING</span></h2>
                </section>
                <section>
                    <h3> Common reasons to seek genetic testing:</h3>
                    <ul>
                        <li>Chronic Pain</li>
                        <li>Fatigue, Stress & Burnout</li>
                        <li>Insomnia or Sleeping Issues</li>
                        <li>Weight management</li>
                        <li>Hormonal Imbalances</li>
                        <li>Depression, Anxiety & Mood swings</li>
                    </ul>
                    <a> VIEW SAMPLE REPORT</a>
                </section>
                <figure>
                    <img src='' alt='genetic test results' />
                </figure>
            </article>
            <article>
                <figure>
                    <img src='' alt='comprehensive genetic test results' />
                </figure>
                <section>
                    <h3>Hormonal Health:</h3>
                    <h5> Using your test results we can assess
                         your issues & create a holistic and personalised plan 
                         that will move you towards wellness.
                    </h5>
                    <a> BOOK CONSULT</a>
                </section>
            </article>
            <article>
                <h2> Still have questions ?</h2>
                <a>SCHEDULE A CALL</a>
            </article>
        </main>
    )
}

export default Genetic;