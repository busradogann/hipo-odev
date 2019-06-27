import React, { Component } from "react";
import Modal from "react-responsive-modal";

import "./_images.scss";

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

    render() {
        const { images } = this.props;
        const { open } = this.state;

        return (
            <div className={"images-wrapper"}>
                {images.map(image =>
                    <div className={"image-wrapper"}
                         key={image.id}>
                        <button className={"image-detail-button"}
                                onClick={this.onOpenModal}>
                            <img src={image.urls.small}
                                 alt=""
                            />
                        </button>

                        <Modal open={open}
                               onClose={this.onCloseModal}
                               center>
                            <img src={image.urls.small}
                                 alt={''}
                            />
                            <div>
                                <button className={"image-download-button"}
                                        onClick={this.downloadButton}>
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