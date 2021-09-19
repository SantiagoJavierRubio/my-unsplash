import React from "react";
import './ImageGrid.css';
import Image from './Image/Image';


const ImageGrid = (props) => {

    const { openModal, apiData } = props;

    if(apiData.length !== 0){
        return(
            <div className="masonry">
                {apiData.map((image, index) => {
                    return <Image imgData={image} openModal={openModal} key={index}/>
                })}
            </div>
        )
    } else {
        return(
            <h3 className="noImageMsg">No images found</h3>
        )
    }

}


export default ImageGrid;