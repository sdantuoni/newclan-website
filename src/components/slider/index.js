'use strict';
import React from 'react';
var Usericon = require('react-icons/lib/fa/user');
var Userplus = require('react-icons/lib/fa/user-plus');

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'out',
      slideIndex: 1
    };
  }
  componentDidMount(done) {

  }
  componentWillLeave(done) {
    // this.setState({
    //   state: 'out',
    //   onComplete: done
    // });
  }
  anchorRedirect (id){
    window.location.hash=id;
}


  render() {
    return (
<div className="image">
  <div className="messages">
    <h1>New Clan Roleplay</h1>
    <p>Bienvenidos a la nueva comunidad de servidores online, nuestra mision es ofrecer los mejores servidores
y abarcar la mas amplia gama de tipos de juegos, ofreciendote la posibilidad de jugar online a tus juegos favoritos
con el respaldo y calidad de una misma comunidad.  </p>
<button onClick={() => this.anchorRedirect('info')}>Ver M&aacute;s</button>
</div>
  <img src="../../assets/images/inicio.jpg"/>
</div>
    );
  }
};

export default Slider;
