import React, { Component } from 'react'
import AOS from 'aos';

import Layout from '../components/Layout'
import ContactModal from '../components/ui/ContactModal'
import 'aos/dist/aos.css'

export default class IndexPage extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {

        return (
            <Layout>
                <section className="section guide">                
                    <div className="container">
                        <h1>Features</h1>
                        <h3>Icons & Animation Libraries</h3>
                        <p>Animate on Scroll</p>
                        <p>Material Design Icons</p>

                        <h3>UI Components</h3>
                        <p>Reusable, Extendable React Modal Component</p>
                        <p>React Tabs</p>
                    </div> 

                    <ContactModal />                                     
                </section>
            </Layout>
        )
    }
}
