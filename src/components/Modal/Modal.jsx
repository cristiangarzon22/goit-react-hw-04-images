import React from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ children, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) { // Comprobar si la tecla presionada es Esc (código 27)
      onClose(); // Llamar a la función onClose pasada como prop
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown); // Agregar un event listener para escuchar la tecla presionada
    return () => {
      document.removeEventListener('keydown', handleKeyDown); // Remover el event listener cuando el componente se desmonta
    };
  }, []);

  return (
    <div className={css.Overlay}>
       <div className={css.Modal}>
       {children}
       </div>
       <button type='button' onClick={onClose} className={css.btn}><span className={css.span}>x</span></button>
     </div>
  );
};
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
export default Modal;
