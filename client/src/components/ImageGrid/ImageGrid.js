import React from "react";
import './ImageGrid.css';
import Image from './Image/Image';


const ImageGrid = (props) => {

    const { openModal, apiData } = props;

    return(
        <div className="masonry">
            {apiData.map((image, index) => {
                return <Image imgData={image} openModal={openModal} key={index}/>
            })}
        </div>
    )
}


export default ImageGrid;