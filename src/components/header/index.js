'use strict';
import React from 'react';
var Usericon = require('react-icons/lib/fa/user');
var Userplus = require('react-icons/lib/fa/user-plus');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'out'
    };
  }
  componentWillEnter(done) {
    // this.setState({
    //   state: 'idle',
    //   onComplete: done
    // });
  }
  componentWillLeave(done) {
    // this.setState({
    //   state: 'out',
    //   onComplete: done
    // });
  }
  render() {
    return (
      <div className="header-box">
          <ul>
            <li className={this.props.inicio}><a href="#">Inicio</a></li>
            <li className={this.props.foro}><a href="#">Foro</a></li>
            <li className={this.props.about}><a href="#">Sobre Nosotros</a></li>
            <li className={this.props.contacto}><a href="#">Contacto</a></li>
            <li className="account-btn"><a href="#"><Usericon />&nbsp;<div className="account-txt">Ingresar</div></a></li>
          </ul>
      </div>
    );
  }
};

export default Header;
