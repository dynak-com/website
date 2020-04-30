import React from 'react';
import useComponent from './hook.js';
import styles from './styles.module.css';
import { NavLink as Container } from 'react-router-dom';

const CustomNavLink = ({ text, address, target }) => {
  const { navLinkRef } = useComponent();
  return (
    <Container exact to={ address } className={ styles.customNavlink } activeClassName={ styles.activated }>
      <span
        ref={navLinkRef}
        className={`nav-link d-inline-block d-lg-block px-1 my-1 my-lg-0 mx-lg-3` }
        data-target={`#${target}`}
      >
        {text}
      </span>
    </Container>
  );
};

export default CustomNavLink;
