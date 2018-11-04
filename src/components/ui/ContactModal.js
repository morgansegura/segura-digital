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
        this.setState({ modalIsOpen: true })
    }

    afterOpenModal() {

    }

    closeModal() {
        this.setState({ modalIsOpen: false })
    }   

    render() {
        const modalContactHeader = {
            data: [{
                title: 'Let\'s work together!'
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
                    className="modal modal-contact"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(29, 22, 29, 0.89)'
                        },
                        content: {
                            outline: 'none'
                        }
                    }}                    
                >
                    <Panel header={modalContactHeader} classList={`panel`}>
                        <div className="panel__list-item">
                            <button className="btnClose" onClick={this.closeModal}><FontAwesomeIcon icon="times" /></button>                        
                            <form className="form form-contact" name="contact" method="POST" netlify>
                                <div className="row">
                                    <div className="col-12">
                                        <label>*Your full name:</label>
                                        <input type="text" name="name" required />
                                    </div>
                                    <div className="col-12">
                                        <label>*Your email address: </label>
                                        <input type="email" name="email" required />                                            
                                    </div>
                                    
                                    <div className="w-100"></div>

                                    <div className="col-12">
                                        <label>How can we help?</label>
                                        <select name="How can we help?">
                                            <option value="new" selected>I need a new website.</option>
                                            <option value="redesign">I want to redesign my current website.</option>
                                            <option value="collaborate">Let's collaborate on a project.</option>
                                            <option value="mentor">I'm looking for a mentor.</option>
                                            <option value="other">Other. Not listed.</option>
                                        </select>                                            
                                    </div>

                                    <div className="w-100"></div>

                                    <div className="col-12">
                                        <label>Please leave a detailed message. (Desired work, time constraints, budget, etc.)</label>
                                        <textarea name="message"></textarea>
                                    </div>
                                    
                                    <div className="form__group justify-content-start align-items-center">
                                        <button className="btn btn-sm btn-cta submit right" type="submit">Send</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </Panel>
                </Modal>

            </div>
        )
    }
}

export default ContactModal