import React, {Component} from "react";
import {Link} from "react-router-dom";
import {MenuItems} from "./MenuItems";


import './Navbar.scss';
class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return (
        <nav className="navbar">
            <section className="navbar__icon" onClick={this.handleClick} >
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </section>
            <ul className={this.state.clicked ? 'navbar__list active' : 'navbar__list' } >
                {MenuItems.map((item, index)=> {
                    return (
                        <li key={index} className="navbar__list-item" >
                            <Link className={item.cName} 
                                to={item.url} > 
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
}
export default Navbar;
