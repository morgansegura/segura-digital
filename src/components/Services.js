import React from 'react';
// Update image application
import imgBranding from '../assets/images/img-masthead-flat3.svg'
import imgWebDesign from '../assets/images/img-masthead-flat2.svg'
import imgWebDev from '../assets/images/img-programming-flat.svg'

const Services = (props) => {

    return (
        <div className="services container">
            <div className="row services__block">
                <div 
                    className="services__image left-image col-12 col-md-5 bgimg img-oval"
                    data-aos="zoom-in-up" 
                    data-aos-duration="700" 
                    data-aos-easing="ease-out" 
                    data-aos-mirror="false" 
                    data-aos-once="false" 
                >
                    <img className="img-responsive" src={imgBranding} alt="Design & Branding -- " />
                </div>
                <div 
                    className="services__content right-content col-12 col-md-6"
                    data-aos="slide-left"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"                    
                >
                    <h3 className="color--purple-light">
                        Branding & Marketing
                    </h3>
                    <p>
                        Bring to the table win-win survival strategies to ensure proactive domination.
                        At the end of the day, going forward, a new normal that has evolved from generation
                        X is on the runway heading towards a streamlined cloud solution. User generated content
                        in real-time will have multiple touchpoints for offshoring.
                    </p>
                </div>
            </div>

            <div className="row services__block">
                <div 
                    className="services__content left-content col-12 col-md-6"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="900"
                    data-aos-easing="ease-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <h3 className="color--blue-light">
                        Interaction & Experience
                    </h3>
                    <p>
                        Bring to the table win-win survival strategies to ensure proactive domination.
                        At the end of the day, going forward, a new normal that has evolved from generation
                        X is on the runway heading towards a streamlined cloud solution. User generated content
                        in real-time will have multiple touchpoints for offshoring.
                    </p>
                </div>
                <div 
                    className="services__image right-image col-12 col-md-5 bgimg img-triangle"
                    data-aos="zoom-in-up"
                    data-aos-duration="700"
                    data-aos-easing="ease-out"
                    data-aos-mirror="false"
                    data-aos-once="false"                     
                >
                    <img className="img-responsive" src={imgWebDesign} alt="Design & Branding -- " />
                </div>
            </div>

            <div className="row services__block">
                <div 
                    className="services__image left-image col-12 col-md-5 bgimg img-diamond"
                    data-aos="zoom-in-up"
                    data-aos-duration="700"
                    data-aos-easing="ease-out"
                    data-aos-mirror="false"
                    data-aos-once="false"                     
                >
                    <img className="img-responsive" src={imgWebDev} alt="Design & Branding -- " />
                </div>
                <div 
                    className="services__content last-child right-content col-12 col-md-6"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="900"
                    data-aos-easing="ease-out"
                    data-aos-mirror="false"
                    data-aos-once="false"                    
                >
                    <h3 className="color--amber-light">
                        Web Development
                    </h3>
                    <p>
                        Bring to the table win-win survival strategies to ensure proactive domination.
                        At the end of the day, going forward, a new normal that has evolved from generation
                        X is on the runway heading towards a streamlined cloud solution. User generated content
                        in real-time will have multiple touchpoints for offshoring.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;