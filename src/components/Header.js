import React, { Component } from 'react';
import { Link } from 'gatsby';
// Components
import Navigation from './Navigation';

class Header extends Component {
    render() {
        const meta = this.props.metadata
        const openMobileNav = () => {
            let el = document.getElementById('wrapper')
            el.classList.toggle('mobile-nav--is-open');
        }
        return (
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <Link className="logo" to="/" title={`${meta.company}`}>
                            <div className="logo-text">
                                <div className="logo-text__inner">
                                    <span className="row1">The </span>
                                    <div className="last-row">
                                        <span className="row2">Brazilian Guys</span>
                                        <span className="row3"> Est. 2015 San Diego, CA </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Navigation meta={meta} />
                        <div className="mobile-nav__trigger" onClick={openMobileNav}>
                            <span className="center"></span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;