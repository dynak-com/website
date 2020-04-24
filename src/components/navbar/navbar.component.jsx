import React from 'react';
import './navbar.styles.css';
import CustomNavLink from '../navlink/navlink.component';
import { NavLink as Container } from 'react-router-dom';
import '../navlink/navlink.styles.css'

const Navbar = props => {
  const { content, targetId } = props;
  return (
    <nav id='styled-navbar' className='navbar navbar-expand-lg navbar-dark'>
      <Container to='/'>
        <h1 id='website-title' className='navbar-brand'>
          dynak<span id='dot'>.</span>com
        </h1>
      </Container>
      <button id='navbar-btn'
        className='navbar-toggler'
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
      {data.map(item => {
        const { text, address } = item;
        return (
          <li id='item-navlink' className='nav-item' key={text}>
            <CustomNavLink text={text} address={address} target={targetId} />
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
