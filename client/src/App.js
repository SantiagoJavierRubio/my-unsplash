import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import ImageGrid from './components/ImageGrid/ImageGrid';
import Modal from './components/Modal/Modal';


function App() {

  const PLACEHOLDER_DATA = [
    {id: '1', url: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", label: "Cachilito en su casa"},
    {id: '2', url: "https://images.unsplash.com/photo-1631891349623-6bf9cec462ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", label: "Pequeñuelos en viaje"},
    {id: '3', url: "https://images.unsplash.com/photo-1631873424136-5b7c419646d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", label: "Salomon"},
    {id: '4', url: "https://images.unsplash.com/photo-1628191078830-c83475b88183?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", label: "Comiendo en familyComiendo en familyComiendo en familyComiendo en family"},
    {id: '5', url: "https://images.unsplash.com/photo-1631807390866-73ece9c6233b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80", label: "Peron peron"},
    {id: '6', url: "https://images.unsplash.com/photo-1631891349623-6bf9cec462ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", label: "Samuel"},
    {id: '7', url: "https://images.unsplash.com/photo-1631873424136-5b7c419646d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", label: "Dos cosas mas"},
    {id: '8', url: "https://images.unsplash.com/photo-1628191078830-c83475b88183?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", label: "Me la como"},
    {id: '9', url: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", label: "Diablo diabolo"},
    {id: 'a', url: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80", label: "Matusalen"},
    {id: 'b', url: "https://images.unsplash.com/photo-1631873424136-5b7c419646d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", label: "Zarathustra"},
    {id: 'c', url: "https://images.unsplash.com/photo-1628191078830-c83475b88183?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", label: "Jennifer Lopez"},
]

  const [modalState, setModal] = useState({ open: false, func: null, id: null });
  const [images, setImages] = useState(PLACEHOLDER_DATA);
  const [filteredImages, setFiltered] = useState(images);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getImages();
  }, []);

  useMemo(() => {
    // Do filter logic over a copy of images
    // asign the filtered array with setFiltered
  }, [filter])

  const getImages = async () => {
    // call API to get list of all images
    // setImages(new_list)
  }

  const imageAdd = async (imgData) => {
    // call API to create new entry with imgData ({ url, label })
    return getImages()
    // Do it better: check if url is img valid
  }

  const imageDelete = async () => {
    // call API to delete modalState.id entry
    return getImages()
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
      <TopBar openModal={openModal} />
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
