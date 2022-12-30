import './testimonials.scss';
import Carousel from './carousel'
import quotation from '../../assets/images/quotation-marks.png';

import 'swiper/css/bundle';

function Testimonials() {
    return(
        <main className='testimonials'>
            <section className='testimonials__container'>
                <section className='testimonials__title-box'>
                    <figure className='testimonials__image'>
                        <img src={quotation} className='testimonials__quotation-img' alt='quotation marks to represent testimonials' />
                    </figure>
                    <section className='testimonials__title'>
                        <h1 className='testimonials__title-header' >CLIENT'S<br/>TESTIMONIALS</h1>
                    </section>
                </section>

            
            </section>
       

             <Carousel />
        </main>
    )
}

export default Testimonials;