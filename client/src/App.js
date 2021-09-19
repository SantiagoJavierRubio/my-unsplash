import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import ImageGrid from './components/ImageGrid/ImageGrid';
import Modal from './components/Modal/Modal';


function App() {

  const [modalState, setModal] = useState({ open: false, func: null, id: null });
  const [images, setImages] = useState([]);
  const [filteredImages, setFiltered] = useState([]);
  const [filter, setFilter] = useState('');

  // Initial get
  useEffect(() => {
    getImages();
  }, []);
  
  const getImages = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URI + '/images');
      setImages(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // If user changes filter or loads new image
  useMemo(() => {
    const filteredImages = images.filter(image => image.label.toLowerCase().includes(filter.toLowerCase()));
    setFiltered(filteredImages);
  }, [filter, images]);

  // Check if URL is for a valid image
  const checkImage = async (url) => {
    const img = new Image();
    img.src = url;
    if(img.complete) {
      return true
    } else {
      img.onload = () => {return true}
      img.onerror = () => {return false}
    }
  }

  const imageAdd = async (imgData) => {
    // call API to create new entry with imgData ({ url, label })
    if(checkImage(imgData.url)){
      try {
        const response = await axios.post(process.env.REACT_APP_API_URI + '/new', imgData);
        setImages(response.data);
      } catch (err) {
        console.log(err);
      }
      closeModal();
    } else {
      alert("No image found on your URL! \nTry using Right Click / Copy image address");
    }
  }

  const imageDelete = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URI}/delete/${modalState.id}`);
      setImages(response.data);
    } catch (err) {
      console.log(err);
    }
    closeModal();
  }

  const openModal = (modalInfo) => {
    if(modalInfo.func === "delete"){
      setModal({
        open: true,
        func: "delete",
        id: modalInfo.id
      })
    } else {
      setModal({
        open: true,
        func: "add",
        id: null
      })
    }
  }

  const closeModal = () => {
    setModal({ open: false, func: null, id: null})
  }

  return (
    <div className="app">
      <TopBar openModal={openModal} filter={setFilter} />
      <ImageGrid openModal={openModal} apiData={filteredImages}/>
      {modalState.open ? 
        <Modal closeModal={closeModal} modalAdd={imageAdd}
          modalDelete={imageDelete} func={modalState.func} /> 
        : 
        null
      }
    </div>
  );
}

export default App;
