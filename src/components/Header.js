import React, { Component } from 'react'
import { Link } from 'gatsby'

class Header extends Component {

    state = {

    }

    // Mobile navigation
    openMobileNav = () => {
        const body = document.getElementsByTagName('body')[0]
        body.classList.toggle('nav--is-open')
    }

    closeMobileNav = () => {
        const specifiedElement = document.querySelector(".menu-icon")
        const body = document.getElementsByTagName('body')[0]

        document.addEventListener('click', function (event) {
            const isClickInside = specifiedElement.contains(event.target);

            if (body.classList.contains('nav--is-open')) {
                if (!isClickInside) {
                    body.classList.remove('nav--is-open')
                }
            }
        })

        document.addEventListener('keyup', function (e) {
            let keyCode = e.keyCode;
            // console.log(keyCode)
            if (keyCode === 27) {
                body.classList.remove('nav--is-open')
            }
        });
    }


    stickyHeader = () => {
        const header = document.getElementsByClassName('header-main')
        const footer = document.getElementsByClassName('footer')
        const sticky = header[0].offsetTop
        // console.log('sticky', sticky)

        window.addEventListener('scroll', function () {
            if (window.scrollY > sticky) {
                header[0].classList.add('is--scrolling')
                footer[0].classList.add('is--scrolling')
            } else {
                header[0].classList.remove('is--scrolling')
                footer[0].classList.remove('is--scrolling')
            }

        })
    }

    componentDidMount() {
        this.stickyHeader()
        this.closeMobileNav()
    }

    render() {
        return (
            <header className="header-main">
                <div className="header-main__inner container">
                    <h1 className="logo">
                        <Link to="/">
                            <strong>Segura</strong>
                        </Link>
                    </h1>
                    <nav className="navigation-main">
                        <Link className="link" to="/#work">Portfolio</Link>
                        <Link className="link" to="/#illustration">Illustration</Link>
                        <Link className="link" to="/articles">Blog</Link>
                        <Link className="link" to="/about">About</Link>
                        <div className="link btn btn-sm btn-round btn-cta btn-round" onClick={this.openModal}>Contact</div>
                    </nav>
                    <div className="menu-icon" onClick={event => { this.openMobileNav(event) }}>
                        <div className="menu-icon__center"></div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
