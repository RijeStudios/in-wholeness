import './testimonials.scss';
import Carousel from './carousel'
import quotation from '../../assets/images/quotation-marks.png';
import testimony_esther from '../../assets/images/testimony-esther.png';
import left_arrow from '../../assets/images/left_arrow.png';
import right_arrow from '../../assets/images/right_arrow.png';
import 'swiper/css/bundle';

function Testimonials() {
    return(
        <main className='testimonials'>
            <section className='testimonials__container'>
                <section className='testimonials__title-box'>
                    <figure className='testimonials__image'>
                        <img src={quotation} className='testimonials__quotation-img' alt='Image of quotation marks to represent testimonials' />
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