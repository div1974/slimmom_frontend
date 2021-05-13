import React from 'react';
import { NavLink } from 'react-router-dom';
import route from '../../../routes';
import styles from './NavModal.module.css';

const Modal = ({ toogleModal }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.NavItem}>
        <NavLink
          onClick={toogleModal}
          exact
          to={route.diary}>
          дневник
        </NavLink>
        <NavLink
          onClick={toogleModal}
          exact
          to={route.calculator}>
          калькулятор
        </NavLink>
      </div>
       <button onClick={toogleModal} className={styles.BurgerIcon} name="Close" />
    </div>
  );
};

export default Modal;
