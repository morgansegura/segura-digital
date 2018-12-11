import React, { Component } from 'react'
import { Link } from 'gatsby'
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
                        <h3>Front End Features</h3>
                        <p>Gulp</p>
                        <p>PostCSS</p>
                        <p>...List Features</p>

                        <h3>Detection</h3>
                        <p>React Device Detect</p>
                        <a 
                            href="https://www.npmjs.com/package/react-device-detect" 
                            title="React Detect Device" 
                            target="_blank"
                        >
                            <span className="mdi mdi-npm"></span> react-detect-device
                        </a>

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
