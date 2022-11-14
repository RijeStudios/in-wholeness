import './testimonials.scss';
import quotation from '../../assets/images/quotation-marks.png';
import testimony_esther from '../../assets/images/testimony-esther.png';
import left_arrow from '../../assets/images/left_arrow.png';
import right_arrow from '../../assets/images/right_arrow.png';

function Testimonials() {
    return(
        <main className='testimonials'>
            <section className='testimonials__container'>
                <section className='testimonials__title-box'>
                    <figure className='testimonials__image'>
                        <img src={quotation} className='testimonials__quotation-img' alt='Image of quotation marks to represent testimonials' />
                    </figure>
                    <section className='testimonials__title'>
                        <h1>Clients testimonials</h1>
                    </section>
                </section>

                <div className="testimonials__testimony-container">
                    <section className='testimonials__arrow-box'>
                        <a className='testimonials__arrow'><img src={left_arrow} alt='left arrow' /></a>
                        <a className='testimonials__arrow'><img src={right_arrow} alt='right arrow' /></a>
                    </section>

                    <section className='testimonials__testimonies'>
                        <figure className='testimonials__testimony-img-box'>
                            <img src={testimony_esther} className='testimonials__testimony-img' alt='image of person delivering testimonial' />
                        </figure>
                        <section className='testimonials__testimony-box'>
                            <p className="testimonials__testimonial-name">Esther Hills</p>
                            <p>Nam non lorem eget urna lacinia facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Aliquam nec sem ac turpis eleifend imperdiet. Duis accumsan et turpis ultricies elementum. 
                                Nullam ac velit quam. Nam id tristique metus, vitae facilisis purus. Fusce at imperdiet erat. Nunc porttitor augue 
                                vitae volutpat eleifend.</p>
                        </section>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default Testimonials;