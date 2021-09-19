import React from "react";
import './Image.css'

const Image = (props) => {
    const { imgData, openModal } = props;
    const { url, label, _id } = imgData;
    return(
        <div className="imageContainer">
            <img src={url} className="image" alt="label"/>
            <div className="imageOverlay">
                <button className="deleteButton" onClick={()=>openModal({func:"delete", id: _id})}>
                    delete
                </button>
                <p className="imageText">{label}</p>
            </div>
        </div>
    )
}

export default Image;