import React from 'react';
import ReactModal from 'react-modal';
import responseObject from './response'

class WeatherAlert extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            nwsHeadline: 'N/A',
            event: 'N/A',
            description: 'N/A',
            headline: 'N/A',
            instruction: 'N/A',
            severity: 'N/A',
            descriptionTab: 'descriptionTab',
            instructionTab: 'instructionTab'
        }

        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)

        this.infoStyles = { 'backgroundColor': '#f09000', 'color': 'black' }
        this.styles = { 'display': 'none', 'width': '40%' }
    }

    componentDidMount() {
        ReactModal.setAppElement('#alertContainer');
        // this.getAlert();
        this.getAlertMock();
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    getAlert() {
        var coor = "31,-88"
        var url = "https://api.weather.gov/alerts/active?point=" + coor

        fetch(url).then(
            (response) => { return response.json() }
        ).then(
            (jsonObj) => {
                console.log(jsonObj)
                let properties = jsonObj.features[0].properties
                let nwsHeadline = properties.parameters.NWSheadline
                let event = properties.event
                let headline = properties.headline
                let description = properties.description
                let instruction = properties.instruction
                this.setState({
                    nwsHeadline: nwsHeadline[0],
                    event: event,
                    description: description,
                    headline: headline,
                    instruction: instruction
                })

            }
        )
    }

    getAlertMock() {
        let properties = responseObject.features[0].properties
        let nwsHeadline = properties.parameters.NWSheadline
        let event = properties.event
        let headline = properties.headline
        let description = properties.description
        let instruction = properties.instruction
        let severity = properties.severity

        this.setState({
            nwsHeadline: nwsHeadline[0],
            event: event,
            description: description,
            headline: headline,
            instruction: instruction,
            severity: severity
        })
    }

    openTab(tabId) {
        if (this.state.descriptionTab === tabId) {
            console.log('opening: ' + tabId)
            let tabClicked = document.getElementById(this.state.descriptionTab);
            tabClicked.style.display = "block"

            // TODO: Something like this, but to the tabs
            // tabClicked.style.backgroundColor = "orange"

            let tabToHide = document.getElementById(this.state.instructionTab);
            tabToHide.style.display = "none"
        } else if (this.state.instructionTab === tabId) {
            console.log('opening: ' + tabId)
            let tabClicked = document.getElementById(this.state.instructionTab);
            tabClicked.style.display = "block"

            let tabToHide = document.getElementById(this.state.descriptionTab);
            tabToHide.style.display = "none"

        }
    }


    render() {
        return (
            <div className="weather-alert-container" id='alertContainer'>
                <div className="weather-alert">
                    <button className="button is-danger is-hovered" onClick={this.handleOpenModal}>
                        <i className="fas fa-exclamation-triangle"></i>
                    </button>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                        style={{ "content": { "bottom": 'auto' } }}
                    >
                        <div className="w3-bar w3-border w3-black w3-center">
                            <button className="w3-bar-item w3-button" style={{ "width": "50%" }} onClick={() => this.openTab(this.state.descriptionTab)}>Description</button>
                            <button className="w3-bar-item w3-button" style={{ "width": "50%" }} onClick={() => this.openTab(this.state.instructionTab)}>Instruction</button>
                        </div>

                        <div id={this.state.descriptionTab}>
                            <h2 style={{ "textAlign": "center" }}>{this.state.event}</h2>
                            <p style={{ "textAlign": "center" }}>
                                {this.state.description}
                            </p>
                        </div>

                        <div id={this.state.instructionTab} style={{ "display": "none" }}>
                            <h2 style={{ "textAlign": "center" }}>Severity: {this.state.severity}</h2>
                            <p style={{ "textAlign": "center" }}>{this.state.instruction}</p>
                        </div>

                        <div style={{ "display": "flex", "justifyContent": "center" }}>
                            <button
                                className="button is-primary is-rounded"
                                onClick={this.handleCloseModal}>
                                Close
                            </button>
                        </div>

                    </ReactModal>
                </div>
            </div >
        );
    }
}

export default WeatherAlert;

