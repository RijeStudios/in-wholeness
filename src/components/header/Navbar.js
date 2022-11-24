import React, {Component} from "react";

class Navbar extends Component {
    render() {
        return (
        <nav className="navbar">
            <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Genetic Testing</a></li>
            <li><a href="#">Speaking</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        );
    }
}

