import React from 'react';
const NavItem = ({text, path, clickHandler}) => {
  return (
    <a
      href={path}
      className="nav-item"
      onClick={clickHandler.bind(this, path, text)}
    >
      {text}
    </a>
  )
};
export default NavItem;