import React, { Component } from 'react'

class Panel extends Component {
    state = {
        // dataSource: DataSource.getBlogPost(props.id)
        classList: this.props.classList ? this.props.classList : null
    }  
    componentDidMount() {
        // DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        // DataSource.removeChangeListener(this.handleChange);
    }       
    handleChange() {
        this.setState({
            // dataSource: DataSource.getBlogPost(this.props.id)
        });
    }
    setState() {}

    render() {
        return (
        <div className={`panel ${this.state.classList}`}>
            <div className="panel__list">
            {this.props.header ? 
                <header className="panel__header">
                    {this.props.header.data.map((content, i) => (                                
                    <div className="panel__header-inner " key={i}>
                        <h4>{content.title}</h4>
                    </div>
                    ))}
                </header>
                : null /* [/header]*/ }

                {this.props.children}
            
            </div>
        </div>
        )
    }
}

export default Panel