import React from 'react';
import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.audio}>
      <Audio />
    </div>
  );
}

export default Loader;
