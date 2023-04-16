import React from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ children, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>{children}</div>
      <button type="button" onClick={onClose} className={css.btn}>
        <span className={css.span}>x</span>
      </button>
    </div>
  );
};
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;
