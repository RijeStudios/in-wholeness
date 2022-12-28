import logo from '../../assets/images/logo.png';
import './header.scss';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import { useRouteMatch } from "react-router-dom";


function Header() {
    

    return (
        <header className='header' >
            <section className='header__logo-box' >
                <Link to='/' >
                <img src={logo} className='header__logo' alt='website logo' />
                </Link>
            </section>
            <Navbar />
        </header>
    )
}

export default Header