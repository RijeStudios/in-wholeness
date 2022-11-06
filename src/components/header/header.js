import logo from '../../assets/images/logo.png';
import './header.scss';


function Header() {
    return (
        <header className='header' >
            <section className='header__logo-box' >
                <img src={logo} className='header__logo' alt='website logo' />
            </section>
        </header>
    )
}

export default Header