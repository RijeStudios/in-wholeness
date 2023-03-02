import facebook from '../../assets/images/facebook-icon.png';
import instagram from '../../assets/images/instagram-icon.png';
import twitter from '../../assets/images/twitter-icon.png';
import linkedin from '../../assets/images/linkedin-icon.png';
import youtube from '../../assets/images/youtube-icon.png';
import apple_store from '../../assets/images/Apple-Store-Icon.png';
import google_store from '../../assets/images/Google-Play-Icon.png';
import location from '../../assets/images/location.png';
import email from '../../assets/images/letter.png';
import phone from '../../assets/images/phone.png';
import './footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <main className='footer'>
            <section className='footer__container'>
                <section className='footer__box footer__center'>
                    <article className='footer__text-box'>
                        <h3 className='footer__title'>WHOLE AND WELL<br />PODCAST</h3>
                        <p className='footer__podcast-text'>Find us on the app store by clicking the link:</p>
                    </article>
                    <figure className='footer__image-box'>
                        <a target='_blank' href='https://open.spotify.com/show/4XAJfn0ykmUrOtirStAY0M'><img src={google_store} className='footer__podcast-image' alt='Icon for google play store' /></a>
                        <a target='_blank' href='https://podcasts.apple.com/us/podcast/whole-well-with-christie-noua-bsc-rhn-pts/id1545000204'><img src={apple_store} className='footer__podcast-image' alt='Icon for apple play store' /></a>
                    </figure>
                </section>

                <div className="footer__page-service-container">
                    <section className='footer__box footer__page-service-size'>
                        <h3 className='footer__title'>Pages</h3>
                        <ul className='footer__list'>
                            <Link to='/' className='footer__anchor-item'><li className='footer__list-item'>Home</li></Link>
                            <Link to='/about' className='footer__anchor-item'><li className='footer__list-item'>About</li></Link>
                            <Link to='/services' className='footer__anchor-item'><li className='footer__list-item'>Services</li></Link>
                            <Link to='/genetictesting' className='footer__anchor-item'><li className='footer__list-item'>Genetic Testing</li></Link>
                            <Link to='/speaking' className='footer__anchor-item'><li className='footer__list-item'>Speaking</li></Link>
                            <Link href='/faq' className='footer__anchor-item'><li className='footer__list-item'>FAQ</li></Link>
                        </ul>
                    </section>

                    <section className='footer__box footer__page-service-size'>
                        <h3 className='footer__title'>Services</h3>
                        <ul className='footer__list'>
                            <Link to='/services' className='footer__anchor-item'><li className='footer__list-item'>Nutrition Consults</li></Link>
                            <Link to='/services' className='footer__anchor-item'><li className='footer__list-item'>Personal Training</li></Link>
                            <Link to='/services' className='footer__anchor-item'><li className='footer__list-item'>Lifestyle Coaching</li></Link>
                        </ul>
                    </section>
                </div>

                <section className='footer__box'>
                    <h3 className='footer__title'>Contact</h3>
                    <ul className='footer__list'>
                        <a href='#' className='footer__anchor-item'>
                            <li className='footer__list-item'>
                                <img src={phone} className='footer__list-image' alt='phone' />
                                (406) 555-0120
                            </li>
                        </a>
                        <a href='#' className='footer__anchor-item'><li className='footer__list-item'><img src={email} className='footer__list-image' alt='letter' />christienoua@inwholeness.com</li></a>
                        <a href='#' className='footer__anchor-item'><li className='footer__list-item'><img src={location} className='footer__list-image' alt='location marker' />2972 Westheimer Rd. Santa Ana, Illinois 85486</li></a>
                    </ul>
                </section>

                <section className='footer__box'>
                    <h3 className='footer__title footer__social-title '>Social Media</h3>
                    <figure className='footer__social-box'>
                        <a target='_blank' href='https://www.facebook.com/Inwholeness'><img src={facebook} className='footer__social-icon' alt='Facebook icon' /></a>
                        <a target='_blank' href='https://www.twitter.com/christie_noua'><img src={twitter} className='footer__social-icon' alt='Twitter icon' /></a>
                        <a target='_blank' href='https://www.linkedin.com/company/in-wholeness/'><img src={linkedin} className='footer__social-icon' alt='LinkedIn icon' /></a>
                        <a target='_blank' href='https://www.instagram.com/inwholeness?igshid=YmMyMTA2M2Y='><img src={instagram} className='footer__social-icon' alt='Instagram icon' /></a>
                        <a target='_blank' href='https://www.youtube.com/channel/UCIoZ1TskwNHIu4iHrEOnEdg'><img src={youtube} className='footer__social-icon' alt='Youtube icon' /></a>
                    </figure>
                </section>
            </section>
        </main>
    )
}

export default Footer;