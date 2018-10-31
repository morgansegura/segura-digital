import React, { Component } from 'react'

class Panel extends Component {
    state = {
        // dataSource: DataSource.getBlogPost(props.id)       
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
    render() {
        return (
            <div className="container container--lg">
                <div className="blog-panel panel">
                    <div className="panel__list">
                    {this.props.header ? 
                        <header className="blog-panel__header">
                            {this.props.header.data.map((content, i) => (                                
                            <div className="panel__header-inner" key={i}>
                                <h1 className="has-text-weight-bold is-size-2">{content.title}</h1>
                            </div>
                            ))}
                        </header>
                        : ''
                    }
                        {this.props.children}
                    </div>
                </div>
            </div>  
        )
    }
}

export default Panel