import React, { Component } from 'react'
import Modal from 'react-modal'

class ContactModal extends Component {
    state = {
        modalIsOpen: false
    } 
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        console.log('modal is open')
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }    
    render() {
        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
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
        )
    }
}

export default ContactModal