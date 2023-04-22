import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import css from './App.module.css';


const App = () => {
  const [images, setImages] = useState([]);
  //const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const fetchImages =() => {
    const API_KEY = '33770960-9441e00aea4c2d2fce88c05cc';
    const BASE_URL = 'https://pixabay.com/api/';
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=12`;
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (query !== '') {
      fetchImages();
    }
  }, [fetchImages]);

  const handleFormSubmit = (searchQuery) => {
    setImages([]);
    setPage(1);
  };

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (largeImageURL) => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };
  // change={handleInputChange}
  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleFormSubmit}/>
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleImageClick} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <Button onClick={handleLoadMoreClick} />
      )}

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </div>
  );
};

export default App;
