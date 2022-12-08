

function Speaking() {
  return (
    <main className="speaking">
      <section className="speaking__title-box" >
        <h1 className="speaking__title" >BRING SOME WHOLENESS TO YOUR DAY</h1>
        <h3 className="speaking__title-tag" >Engaging and inspiring health & wellness speaker</h3>
      </section>

      <section>
        <figure className="speaking_image-box" >
            <img src='' className="speaking__image" alt='christie noua a health and wellness speaker' />
        </figure>
        <article className="speaking__about-box" >
            <p className="speaking__about" >Christie Noua has inspired and educated thousands of
                audiences across North america. With a diverse portfolio of
                wellness and fitness workshops. 
            </p>

            <p className="speaking__about" > Our most requested topic is “Weight loss management”. You can also Choose from our
                extensive list of topics or work with us to create a
                 customised soultuion that suits your events
            </p>

            <section className="speaking__button-box">
                <a className="speaking__button" > CONTACT US</a>
            </section>
        </article>

      </section>
    
      <section className="speaking__topic-box" >
        <h2 className="speaking__topic-title" >SPEAKING <span>TOPICS</span> </h2>
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
       
      <section className="speaking__about-title" >
        <h2 className="speaking__about" > ABOUT <span> CHRISTIE NOUA</span></h2>
      </section>

      <section className="speaking__about-box" >
        <article className="speaking__christie-box" >
            <h5 className="speaking__about-header" >
            Christie Noua is a board certified nutritionist, personal 
            coach and registered psychotherapist (qualifying).
            </h5>
            <h6 className="speaking__about-tags" > Clinical expertise: Digestive health, Endocrine disorders
                Hormonal and Mental issues
            </h6>
        </article>
        <figure className="speaking__christie" >
            <img src='' className="speaking__christie-image" alt='christie noua a certified nutritionist and wellness speaker' />
        </figure>
      </section>

      <section className="speaking__resume-box" >
        <a className="speaking__resume" >Download Resume</a>
        <a className="speaking__resume-button" > WORK WITH ME</a>
      </section>
    </main>
  );
}

export default Speaking;