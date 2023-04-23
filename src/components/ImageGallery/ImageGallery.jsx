import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({id, images ,onClick}) => {
  return (
    <div className="galley">
      <ul className={css.ImageGallery}>
        {images.map(({  webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            image={{  webformatURL, largeImageURL }}
            onClick={() => onClick(largeImageURL)}
          />
        ))}
      </ul>
    </div>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
