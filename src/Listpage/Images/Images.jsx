import React, { Component } from "react";
import Modal from "react-responsive-modal";

import "./_images.scss";

import MapContainer from "../../Detailpage/MapContainer";

export default class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open : false,
            selectedImageUrl : '',
            downloadUrl : '',
            profilePhoto : '',
            name : '',
            username : '',
        }
    };

    onOpenModal = (image) => {
        this.setState({
            open : true,
            selectedImageUrl : image.urls.small,
            downloadUrl : image.links.download,
            profilePhoto : image.user.profile_image.small,
            name : image.user.name,
            username : image.user.username
        });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {

        const {
            images
        } = this.props;

        const {
            open,
            selectedImageUrl,
            downloadUrl,
            profilePhoto,
            name,
            username
        } = this.state;

        return (
            <div className={"images-wrapper"}>
                {images.map(image =>
                    <div className={"image-wrapper"}
                         key={image.id}>
                        <button className={"image-detail-button"}
                                onClick={() => this.onOpenModal(image)}>
                            <img src={image.urls.small}
                                 alt=""/>
                        </button>

                        <Modal className={"modal-wrapper"}
                               open={open}
                               onClose={this.onCloseModal}
                               center>
                            <img className={"modal-image"}
                                 src={selectedImageUrl}
                                 alt={""} />
                            <div className={"modal-detail"}>
                                <img className={"profile-photo"}
                                     src={profilePhoto}
                                     alt="" />
                                <p className={"name"}>
                                    {name}
                                </p>
                                <p className={"username"}>
                                    @{username}
                                </p>
                                <button className={"image-download-button"}>
                                    <a href={downloadUrl}
                                       className={"image-download-button-context"}>
                                        Download
                                    </a>
                                </button>
                                <MapContainer />
                            </div>
                        </Modal>
                    </div>
                )}
            </div>
        );
    }
}