import React, { Component } from 'react';
import NavItem from '../presentational/NavItem';
class Nav extends Component {
  constructor(){
    super();
    this.state = {};
  };
  clickNavItem(path, text){
    console.log(`path: ${path}, text: ${text}`);
  }
  render(){
    return (
      <div className="nav-container">
        <NavItem text="Home" path="/#" clickHandler={this.clickNavItem} />
        <NavItem text="Mixer" path="/#mixer" clickHandler={this.clickNavItem} />
        <NavItem text="Recipes" path="/#recipes" clickHandler={this.clickNavItem} />
        <NavItem text="Ingredients" path="/#ingredients" clickHandler={this.clickNavItem} />
      </div>
    )
  };
}

export default Nav;