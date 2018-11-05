import React from 'react'

const theYear = (new Date()).getFullYear()

const Footer = ({ siteTitle }) => (

    <footer className="footer">
        <div className="container footer__inner">
            <p className="copyright">Segura LLC. &copy; {theYear}</p>
            {/*
            <nav className="navigation__secondary">
                <Link className="link" to="/">Work</Link>
                <span className="divider"> / </span>
                <Link className="link" to="/blog">Blog</Link>
                <span className="divider"> / </span>
                <Link className="link" to="/about">About</Link>
            </nav>
            <Link className="footer__cta btn btn-sm btn-cta" to="/">Let's work together</Link>
            */}
        </div>
    </footer>
)

export default Footer
