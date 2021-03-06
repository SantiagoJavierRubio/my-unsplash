import React from "react";
import './TopBar.css';

const TopBar = (props) => {

    const { openModal, filter } = props;

    const handleFilter = (e) => {
        filter(e.target.value);
    }

    return(
        <div className="topBar">
            <div className="icons">
                <span className="material-icons">person</span>
                <div className="iconsText">
                    <h1>My Unsplash</h1>
                    <p>devchallenges.io</p>
                </div>
            </div>
            <div className="searchBar">
                <span className="material-icons">search</span>
                <input type="text" placeholder="Search by label" onChange={handleFilter}/>
            </div>
            <button className="addBtn" onClick={()=>openModal({func:"add"})}>Add a photo</button>
        </div>
    )
}

export default TopBar;