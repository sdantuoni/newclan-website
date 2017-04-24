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
<div>
      <div className="servers">
        <div className="background">
          <div className="servers-container">
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
      </div>

      <div className="code">
        <div className="background">
          <div className="servers-container">
              <h1>Nuestro C&oacute;digo</h1>
                <p>Somos un equipo de programadores profesionales y usamos las mas nuevas y optimas herramientas, y lenguajes</p>
                <p>para que tu experiencia tanto en la web como en el juego sean &uacute;nicas.</p>
              <div className="img-grid">
                <img className="nodejs" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-white.png"/>
                <img className="reactjs" src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png"/>
                <img className="github" src="https://s-media-cache-ak0.pinimg.com/originals/e3/de/d1/e3ded15d052bfc7df584387db3da44ce.png"/>
            </div>
          </div>
        </div>
      </div>

      <div className="servers">
        <div className="background">
          <div className="servers-container">
              <h1>El mejor Staff</h1>
                <p>Nos aseguramos de conseguir el mas capacitado equipo de administradores para satisfacer todas tus necesidades,</p>
                <p>poder ayudarte en todo lo que podamos, mantener el orden y las reglas dentro de los servidores.</p>
            <div className="img-grid">
              <img className="aws" src="https://tools.jidoka.be/images/amazon-web-services.png"/>
              <img className="analytics" src="https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_horizontal_white_2x.png"/>
              <img className="godaddy" src="https://s21.q4cdn.com/444693267/files/doc_downloads/Assets/GoDaddy_Logo_RGB_Full_W.png"/>
            </div>
          </div>
      </div>
    </div>
  </div>
    );
  }
};

export default Info;
