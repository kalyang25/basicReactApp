import * as React from 'react';
import Link from '../../components/Link/Link';
import './Header.css';

const Navigation = () => {
    return (
        <ul className="top_navigation">
            <li><Link url="/" title="Home" name="Home" /></li>
            <li><Link url="/product" title="Product" name="Product" /></li>
            <li><Link url="/contact" title="Contact Us" name="Contact" /></li>
        </ul>
    )
};

const Header = () => {
    return (
        <div>
            <h1>RLogo</h1>
        <Navigation />
        </div>
    )
};

export default Header;