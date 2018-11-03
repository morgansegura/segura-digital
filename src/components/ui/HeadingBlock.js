import React from 'react';

const HeadingBlock = (props) => {
    // console.log(props.headings)
    return (
        <header className="section__title-block">
            <h2 className="heading underheading h1 b3 t-center">{props.headings.title}</h2>
            <h3 className="subheading h4 b3 t-center container">
                {props.headings.subtitle}
            </h3>
        </header>
    );
};

export default HeadingBlock