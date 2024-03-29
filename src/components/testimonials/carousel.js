import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';
import {Testimonial} from './testimonial.js';

export default function Carousel() {

    return (
        <main> 
            <Swiper className="testimonials__testimony-container mySwiper" navigation={true} modules={[Navigation]}>
                {Testimonial.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonials__swiper-box' >
                            <h2 className='testimonials__title-header' >{item.name}</h2>
                            <p className='testimonials__testimony' >{item.content}</p>
                        </SwiperSlide>
                    )
                } )}
            </Swiper>
        </main>
    )
}