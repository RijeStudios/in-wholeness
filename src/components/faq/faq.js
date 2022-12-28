import { useEffect } from "react";
import './faq.scss';
import FaqItem from "../faqItem/faqItem";


function FAQ() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      return (
        <main className="frequent" >
            <section className="frequent__questions" >
                <h1 className="frequent__title" > FREQUENTLY ASKED QUESTIONS</h1>
            </section>

            <section>
                <FaqItem/>
            </section>
            <article className='genetic__question-box' >
                <h2 className='genetic__questions' > Looking for more help?</h2>
                <section className='genetic__hormone-question-box' > 
                    <a className='genetic__question-button' href='https://inwholeness.janeapp.com/' target='_blank' >ASK A QUESTION</a>
                </section>
            </article>
        </main>
      )
}

export default FAQ;