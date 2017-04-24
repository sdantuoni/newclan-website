'use strict';
import React from 'react';
var Servericon = require('react-icons/lib/fa/server');
var Userplus = require('react-icons/lib/fa/user-plus');

class Info extends React.Component {
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
      <div className="info">
        <div className="column-container">
            <h1>Nuestra infraestructura</h1>
              <p>Contamos con la mejor infraestructura de servidores para ofrecerte una experiencia de juego unica,</p>
              <p>garantizando la integridad de tus datos y proteccion contra todo tipo de ataques.</p>
          <div className="img-grid">
            <img className="aws" src="https://tools.jidoka.be/images/amazon-web-services.png"/>
            <img className="analytics" src="https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_horizontal_white_2x.png"/>
            <img className="godaddy" src="https://s21.q4cdn.com/444693267/files/doc_downloads/Assets/GoDaddy_Logo_RGB_Full_W.png"/>

          </div>
        </div>
      </div>
    );
  }
};

export default Info;
