import React from 'react';
import './navbar.styles.css';
import NavLink from '../navlink/navlink.component';
import StyledNavLink from '../navlink/navlink.styles';

const Navbar = props => {
  const { content, targetId } = props;
  return (
    <nav id='styled-navbar' className='navbar navbar-expand-lg navbar-dark'>
      <StyledNavLink to='/'>
        <h1 className='navbar-brand'>
          dynak<span id='dot'>.</span>com
        </h1>
      </StyledNavLink>
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
          <li className='nav-item' key={text}>
            <NavLink text={text} address={address} target={targetId} />
          </li>
        );
      })}
    </ul>
  );
}

export default Navbar;
