import logo from '../../assets/images/logo.png';
import './header.scss';
import Navbar from './Navbar';

function Header() {
    return (
        <header className='header' >
            <section className='header__logo-box' >
                <img src={logo} className='header__logo' alt='website logo' />
            </section>
            <Navbar />
        </header>
    )
}

export default Header