import React from 'react';
import { NavLink as Container } from 'react-router-dom';
import styles from './styles.module.css';
import useComponent from './hook.js';

const NavLink = ({ text, address, target }) => {
  const { navLinkRef } = useComponent();
  return (
    <Container className={styles.navlink} exact to={address}>
      <span
        ref={navLinkRef}
        className={`nav-link d-inline-block d-lg-block px-1 my-1 my-lg-0 mx-lg-3 ${styles.textWrapper}`}
        data-target={`#${target}`}
      >
        {text}
      </span>
    </Container>
  );
};

export default NavLink;
