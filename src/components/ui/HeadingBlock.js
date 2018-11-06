import React from 'react';

const HeadingBlock = (props) => {
    // console.log(props.headings)
    return (
        <header 
            className="section__title-block"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-mirror="false"
            data-aos-once="false"             
        >
        { props.headings.main === true ?
            <div className="container container-md ">            
                {props.headings.title ?
                    <h1 className="heading underheading t-center">
                        {props.headings.title}
                    </h1>
                : null }
                {props.headings.subtitle ?
                        <h2 className="subheading t-center container">
                        {props.headings.subtitle}
                    </h2>
                : null }                
            </div>            
        : 
            <div className="container container-md ">
                {props.headings.title ?
                    <h2 className="heading t-center">
                        {props.headings.title}
                    </h2>
                : null }                
                {props.headings.subtitle ? 
                    <h3 className="subheading h4 b3 t-center">                    
                        {props.headings.subtitle}
                    </h3>
                : null }                
            </div>
        }
        </header>

    );
};

export default HeadingBlock