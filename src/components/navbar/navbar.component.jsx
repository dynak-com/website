import React from 'react';
import styles from './styles.module.css';
import NavLink from '../navlink/navlink.component';
import { NavLink as LogoContainer } from 'react-router-dom';

const Navbar = (props) => {
  const { content, targetId } = props;
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${styles.navbarLinks}`}
    >
      <LogoContainer to='/'>
        <h1 className={`navbar-brand ${styles.logo}`}>
          dynak<span className={styles.logoDot}>.</span>com
        </h1>
      </LogoContainer>
      <button
        className={`navbar-toggler ${styles.navbarButton}`}
        type='button'
        data-toggle='collapse'
        data-target={`#${targetId}`}
        aria-controls={targetId}
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id={targetId}>
        {onRenderNavLinks(content, targetId)}
      </div>
    </nav>
  );
};

function onRenderNavLinks(data, targetId) {
  return (
    <ul className='navbar-nav ml-auto'>
      {data.map((item) => {
        const { text, address } = item;
        return (
          <li className='nav-item' key={text}>
            <NavLink text={text} address={address} target={targetId} />
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
