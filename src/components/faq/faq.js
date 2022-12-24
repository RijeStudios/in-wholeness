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
        </main>
      )
}

export default FAQ;