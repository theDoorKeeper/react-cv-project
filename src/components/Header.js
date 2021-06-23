import React, { Component } from 'react';
import '../style/Header.css'
export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">CV Maker</div>
        <i className="fa fa-address-card"/>
      </div>
    );
  }
}

export default Header;
