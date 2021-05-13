import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavModal from './NavModal/NavModal'
import routes from '../../routes';
import styles from './Navigation.module.css';

class Navigation extends Component {
  state = {
    openModal: false
  };

  toogleModal = () => {
    this.setState(state => ({ openModal: !state.openModal }));
  };

  render() {
    const { toogleModal } = this;
    const { openModal } = this.state;

    return (
      <nav className={styles.Container}>
        <ul className={styles.NavList}>
          <li className={styles.NavItem}>
            <NavLink
              to={routes.diary}
              exact
              className={styles.NavigationLink}
              activeClassName={styles.NavigationLinkActive}
            >
              дневник
            </NavLink>
          </li>
          <li className={styles.NavItem}>
            <NavLink
              to={routes.calculator}
              exact
              className={styles.NavigationLink}
              activeClassName={styles.NavigationLinkActive}
            >
              калькулятор
            </NavLink>
          </li>
        </ul>

        {openModal && (
          <NavModal toogleModal={toogleModal} />
        )}

        {!openModal && (
          <button
            className={styles.BurgerIcon}
            onClick={toogleModal}
            name='Menu'
          >
          </button>
        )}

        {openModal && (
          <button
            className={(styles.BurgerIconClose, styles.BurgerIcon)}
            onClick={toogleModal}
            name='Close'
            // to='/'
          >
          </button>
        )}
      </nav>
    )
  }
}

export default Navigation;