import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import css from './App.module.css';
import fetchImage from './Fectchimages';
const App = () => {
  const [searchInfo, setSearchInfo] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!searchInfo) {
      return;
    }
    setLoading(true);
    fetchImage(searchInfo, page).then((images) => {
      if (images.totalHits !== 0) {
        setImages((prevState) => [...prevState, ...images.hits]);
        setLoading(false);
        return;
      }
      return setLoading(false);
    });
  }, [searchInfo, page]);
  const handleFormSubmit = (name) => {
    setSearchInfo(name);
    setPage(1);
    setImages([]);
  }; 

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleFormSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleImageClick} key={images.id}/>
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMoreClick} />}

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </div>
  );
};

export default App;
