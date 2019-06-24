import React, { Component } from 'react';
import './_images.scss';
import Modal from 'react-responsive-modal';
import { Map, GoogleApiWrapper } from 'google-maps-react';




export default class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open : false,
            downloadImage : '',
        }
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        function downloadButton() {
            const url = `https://api.unsplash.com/photos/:id/download?client_id=930640e0b7713dca3ab1a0751b6f4b4741d1dfca6a72be2a071cddd6c1d0c92c`;

            fetch(url)
                .then(response => response.json())
                .then(data => console.log({ downloadImage : data.results.id }));
        }
    }

    render() {
        const {images} = this.props;
        const { open } = this.state;

        return (
            <div className={"images-wrapper"}>
                {images.map(image =>
                    <div className={"image-wrapper"} key={image.id}>
                        <button className={"image-detail-button"} onClick={this.onOpenModal}>
                            <img src={image.urls.small}
                                 alt=""
                            />
                        </button>
                        <Modal open={open} onClose={this.onCloseModal} center>
                            <img src={image.urls.small} alt={''}
                            />
                            <div>
                                <button className={"image-download-button"} onClick={this.downloadButton}>
                                    Download
                                </button>
                            </div>
                        </Modal>
                    </div>
                )}
            </div>
        );
    }
}