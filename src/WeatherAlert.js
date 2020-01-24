import React from 'react';
import ReactModal from 'react-modal';

class WeatherAlert extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            nwsHeadline: 'N/A',
            event: 'N/A',
            description: 'N/A',
            headline: 'N/A',
            instruction: 'N/A'
        }

        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)

        this.infoStyles = { 'backgroundColor': '#f09000', 'color': 'black' }
        this.styles = { 'display': 'none', 'width': '40%' }
    }

    componentDidMount() {
        ReactModal.setAppElement('#alertContainer');
        this.getAlert();
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


    render() {
        return (
            <div className="weather-alert-container" id='alertContainer'>
                <div className="weather-alert">
                    <button className="button is-rounded is-warning" onClick={this.handleOpenModal}>
                        View Alert(s)
                    </button>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                    >
                        <div className="w3-bar w3-border w3-black w3-center">
                            <button className="w3-bar-item w3-button" style={{ "width": "50%" }} onclick="openCity('London')">Description</button>
                            <button className="w3-bar-item w3-button" style={{ "width": "50%" }} onclick="openCity('Paris')">Instruction</button>
                        </div>

                        <div id="London">
                            <h2 style={{ "textAlign": "center" }}>{this.state.event}</h2>
                            <p style={{ "textAlign": "center" }}>
                                {this.state.description}
                            </p>
                        </div>

                        <div id="Paris" className="w3-container city" style={this.styles}>
                            <h2>Paris</h2>
                            <p>Paris is the capital of France.</p>
                        </div>

                        <div style={{ "display": "flex", "justifyContent": "center" }}>
                            <button
                                className="button is-warning is-rounded"
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

