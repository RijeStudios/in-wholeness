import './testimonials.scss';
import quotation from '../../assets/images/quotation-marks.png';
import testimony_esther from '../../assets/images/testimony-esther.png';

function Testimonials() {
    return(
        <main className='testimonials'>
            <section className='testimonials__container'>
                <section className='testimonials__title'>
                    <figure className='testimonials__image'>
                        <img src={quotation} className='testimonials__quotation-img' alt='Image of quotation marks to represent testimonials' />
                    </figure>
                    <section className='testimonials__title'>
                        <h1>Clients testimonials</h1>
                    </section>
                </section>

                <section  className='testimonials__arrows'>
                    <span></span>
                    <span>&#8594;</span>
                </section>

                <section className='testimonials__testimonies'>
                    <figure className='testimonials__testimony-img'>
                        <img src={testimony_esther} className='testimonial__testimony-image' alt='image of person delivering testimonial' />
                    </figure>
                    <section className='testimonials__testimony'>
                        <p>Nam non lorem eget urna lacinia facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                             per inceptos himenaeos. Aliquam nec sem ac turpis eleifend imperdiet. Duis accumsan et turpis ultricies elementum. 
                             Nullam ac velit quam. Nam id tristique metus, vitae facilisis purus. Fusce at imperdiet erat. Nunc porttitor augue 
                             vitae volutpat eleifend.</p>
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Testimonials;