import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <div className="header-content">
          <h1>facebook.</h1>
          <div>
            <a href="">Meu Perfil</a>
            <div className="icon-perfil" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
