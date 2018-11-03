import React, { Component } from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000'
    }
}

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
        return (
            <div>
                <button id="headerContact" className="link btn btn-sm btn-round btn-cta btn-round" onClick={this.openModal}>Contact</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                >
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form method="post" netlify>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default ContactModal