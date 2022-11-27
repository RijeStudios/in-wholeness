import React, {Component} from "react";
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
            <ul className='' >
                {MenuItems.map((item, index)=> {
                    return (
                        <li key={index} className="navbar__list-item" >
                            <a className={item.cName} 
                                href={item.url} > 
                                {item.title}
                            </a>
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
