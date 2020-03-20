import React from 'react';
import StyledNavLink from './navlink.styles';
import useComponent from './hook.js';

const NavLink = ({ text, address, target }) => {
  const { navLinkRef } = useComponent();
  return (
    <StyledNavLink exact to={address}>
      <span
        ref={navLinkRef}
        className='nav-link d-inline-block d-lg-block px-1 my-1 my-lg-0 mx-lg-3'
        data-target={`#${target}`}
      >
        {text}
      </span>
    </StyledNavLink>
  );
};

export default NavLink;
