import React from 'react';
import ReactModal from "react-modal";

class WeatherAlert extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="weather-alert-container">
                <div className="weather-alert">
                    <button className="button is-rounded is-warning" onClick={this.handleOpenModal}>
                        View Alert(s)
                </button>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                        className="modal-card"
                    >



                        <header className="modal-card-head">
                            <p className="modal-card-title">Weather Alert</p>

                        </header>
                        <section className="modal-card-body">
                            some stuff here and more here
                            </section>
                        <footer className="modal-card-foot">
                            <button className="button" onClick={this.handleCloseModal}>Cancel</button>
                        </footer>




                        {/* <button onClick={this.handleCloseModal}>Close Modal</button> */}
                    </ReactModal>
                </div>
            </div>
        );
    }
}

export default WeatherAlert;

