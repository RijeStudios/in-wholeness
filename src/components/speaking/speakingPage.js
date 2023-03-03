import './speaking.scss';
import christie from '../../assets/images/christie.jfif';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Speaking() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="speaking">
      <section className="speaking__title-box" >
        <h1 className="speaking__title" >BRING SOME WHOLENESS TO YOUR DAY</h1>
        <h3 className="speaking__title-tag" >Engaging and inspiring health & wellness speaker</h3>
      </section>

      <section className='speaking__row' >
        <figure className="speaking__image-box" >
          <img src={christie} className="speaking__image" alt='christie noua a health and wellness speaker' />
        </figure>
        <article className="speaking__about-box" >
          <p className="speaking__about" >Christie Noua has inspired and educated thousands of
            audiences across North america. With a diverse portfolio of
            wellness and fitness workshops.
          </p>

          <p className="speaking__about" > Our most requested topic is “Weight loss management”. You can also Choose from our
            extensive list of topics or work with us to create a
            customised soultuion that suits your event.
          </p>

          <section className="speaking__button-box">
            <Link to='/contact' className='speaking__button-link speaking__button' >
              CONTACT US
            </Link>
          </section>
        </article>

      </section>

      <section className="speaking__topic-box" >
        <h2 className="speaking__topic-title" >SPEAKING <span className="speaking__topic-title--gold" >TOPICS</span> </h2>
        <ul className="speaking__title-list" >
          <li className="speaking__title-item" >Lean, Mean, Green: How to loose and maintain
            weight with a plant based lifestyle
          </li>
          <li className="speaking__title-item" >Gut on Lock: Transform your gut health using our 3 pillars
            of gut health
          </li>
          <li className="speaking__title-item" >New Me, New Brain: How to manage your nutrition
            and mental health during times of high stress
          </li>
        </ul>
      </section>



      <section className="speaking__speaker-box" >

        <article className="speaking__christie-box" >
          <section className="speaking__about-title" >
            <h2 className="speaking__about-black" > ABOUT <span className="speaking__about--gold"> CHRISTIE NOUA</span></h2>
          </section>
          <h5 className="speaking__about-header" >
            Christie Noua is a board certified nutritionist, personal
            coach and registered psychotherapist (qualifying).
          </h5>
          <h6 className="speaking__about-tags" > Clinical expertise: Digestive health, Endocrine disorders
            Hormonal and Mental issues
          </h6>
        </article>
        <figure className="speaking__christie" >
          <img src={christie} className="speaking__image" alt='christie noua a certified nutritionist and wellness speaker' />
        </figure>
      </section>

      <section className="speaking__resume-box" >
        <a className="speaking__resume" href='#' >Download Resume</a>
        <Link to='/contact' className='speaking__button-link' >
          <button className="speaking__resume-button" > WORK WITH ME</button>
        </Link>
      </section>

    </main>
  );
}

export default Speaking;