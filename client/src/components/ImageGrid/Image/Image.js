import React from "react";
import './Image.css'

const Image = (props) => {
    const { imgData, openModal } = props;
    const { url, label, id } = imgData;
    return(
        <div className="imageContainer">
            <img src={url} className="image" />
            <div className="imageOverlay">
                <button className="deleteButton" onClick={()=>openModal({func:"delete", id:id})}>
                    delete
                </button>
                <p className="imageText">{label}</p>
            </div>
        </div>
    )
}

export default Image;