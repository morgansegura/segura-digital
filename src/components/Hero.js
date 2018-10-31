import React from 'react';
// import { graphql, Link } from "gatsby"

// import imgHero from '../assets/images/img-masthead-flat4.svg'

const Hero = ({ data }) => {
    return (
        <section className="section section-hero bgimg masthead">
            <div className="bgimg masthead-inner"></div>
            <div className="container container--md">

                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="section-hero__title-block">
                            <h1 className="heading">
                                Manage your <span className="b4"> Web Development </span> with us
                            </h1>
                            <h2 className="subheading">
                                Bring to the table win-win survival strategies to ensure proactive domination.
                                At the end of the day, going forward, a new normal that has evolved from generation
                                X is on the runway heading towards a streamlined cloud solution.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
