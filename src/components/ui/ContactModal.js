import React, { Component } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Panel from './Panel'

Modal.setAppElement('#___gatsby')

class ContactModal extends Component {
    constructor() {
        super()

        this.state = {
            modalIsOpen: false,
            modal: this.props
        }

        this.openModal = this.openModal.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        const body = document.getElementsByTagName('body')[0]
        body.classList.add('modal--is-open')
        this.setState({ modalIsOpen: true })
    }

    afterOpenModal() {
    
    }

    closeModal() {
        const body = document.getElementsByTagName('body')[0]
        body.classList.remove('modal--is-open')        
        this.setState({ modalIsOpen: false })
    }   

    render() {
        const modalContactHeader = {
            data: [{
                title: 'Please be very detailed.'
            }]
        }            
        const asideCommunityHeading = {
            data: [{
                title: 'Community Building'
            }]
        }                   
        const asideTipsHeading = {
            data: [{
                title: 'Helpul tips'
            }]
        }                   
        return (
            <div>
                <button id="headerContact" className="btn btn-sm btn-cta" onClick={this.openModal}>Contact</button>            
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="pattern-wool modal modal-contact bgcolor--grey"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(29, 22, 29, 0.89)'
                        },
                        content: {
                            outline: 'none'
                        }
                    }}                    
                >
                    <header className="header header-sm">
                        <h1 className="c-white b4 h5 uppercase container">
                            Let's work together
                            <button className="btnClose light" onClick={this.closeModal}><FontAwesomeIcon icon="times" /></button>
                        </h1>
                    </header>
                    <div className="container">
                        
                        <div className="row justify-content-start">
                            <aside className="col-12 col-md-4 order-1">
                                <Panel header={asideCommunityHeading}>
                                    <div className="panel__list-item">
                                        <p>
                                            Are you a Small Business owner trying to increase your web presence or upgrade your current website?
                                            if so, Please select the 'I am a small business option' in the contact form to be considered for special pricing.
                                            We love working with Small Business owners especially those working to make a difference in their communities 
                                            and we want to help get you kickstart your digital campaign! We also work well with individuals and large businesses!
                                                                                  
                                        </p>
                                        <br />
                                        <p>
                                            <strong>Segura Web Design is a Family Owned, Digital Agency and Small Business</strong> so we know the 
                                            level of dedication and hard work that goes into running a successful small business. We are located in Southern California, 
                                            however we'd like to hear from small business owners all over the world.
                                        </p>
                                    </div>
                                </Panel>
                                <Panel header={asideTipsHeading}>
                                    <div className="panel__list-item">
                                        <p><strong>Average Project Timeframe</strong></p>
                                        <p>Generally a basic web application can take upwards of 30 days or more. You may or may not be aware but there are many phases involved in completing a web application..</p>
                                        <br />
                                        <p>
                                            <strong>Segura Web Design is a Family Owned, Digital Agency and Small Business</strong> so we know the 
                                            level of dedication and hard work that goes into running a successful small business. We are located in Southern California, 
                                            however we'd like to hear from small business owners all over the world.
                                        </p>
                                    </div>
                                </Panel>
                            </aside>
                            <div className="col-12 col-md-8 order-0">
                                <Panel header={modalContactHeader} classList={`form-contact`}>
                                    <div className="panel__list-item">
                                        <form className="form form-contact" name="contact" method="POST" netlify>
                                            <div>
                                                <label>*Your Full Name:</label>
                                                <input type="text" name="name" required />
                                            </div>
                                            <div>
                                                <label>*Your Email Address: </label>
                                                <input type="email" name="email" required />
                                            </div>
                                            <div>
                                                <label>Your Business Name: </label>
                                                <input type="email" name="email" required />
                                            </div>

                                            <div>
                                                <label>How can we help?</label>
                                                <select name="How can we help?">
                                                    <option value="new" >I need a new website.</option>
                                                    <option value="redesign">I want to redesign my current website.</option>
                                                    <option value="collaborate">Let's collaborate on a project.</option>
                                                    <option value="mentor">I'm looking for a mentor.</option>
                                                    <option value="other">Other. Not listed.</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label>What is your time frame?</label>
                                                <select name="What is your time frame?">
                                                    <option value="redesign">I have time and I want to do it right.</option>
                                                    <option value="collaborate">Let's collaborate on a project.</option>
                                                    <option value="mentor">I'm looking for a mentor.</option>
                                                    <option value="new" >Urgent! I need it yesterday.</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label>What does your marketing budget look like?</label>
                                                <select name="What is your marketing budget?">
                                                    <option value="average">Average Budget.</option>
                                                    <option value="smaller">Smaller budget.</option>                                                    
                                                    <option value="large">Money is no object.</option> 
                                                    {/*<option value="new">Tell me more about special pricing.</option>*/}
                                                </select>
                                            </div>
                                            <div>
                                                <label>Please leave a detailed message. (Desired work, time constraints, budget, etc.)</label>
                                                <textarea name="message"></textarea>
                                            </div>
                                            <div className="form__group justify-content-start align-items-center">
                                                <button className="btn btn-sm btn-cta submit" type="submit">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </Panel>
                            </div>
                        </div>                      
                    </div>                
                </Modal>

            </div>
        )
    }
}

export default ContactModal