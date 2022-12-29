import { useState } from "react";
import {Link} from "react-router-dom";
import {MenuItems} from "./MenuItems";
import './Navbar.scss';

function Navbar () {
   const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  const closeMobileMenu = () => setClicked(false);
    
        return (
        <nav className="navbar">
            <section className="navbar__icon" onClick={handleClick} >
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </section>
            <ul className={clicked ? 'navbar__list active' : 'navbar__list' } >
                {MenuItems.map((item, index)=> {
                    return (
                        <li key={index} className="navbar__list-item" >
                            <Link className={item.cName} 
                                to={item.url} onClick={closeMobileMenu} > 
                                {item.title}
                            </Link>
                        </li>

                    )
                }) 
                
                }
            </ul>
        </nav>
        );
    
}
export default Navbar;
