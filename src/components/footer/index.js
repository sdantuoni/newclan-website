'use strict';
import React from 'react';
var Fbicon = require('react-icons/lib/fa/facebook');
var Twittericon = require('react-icons/lib/fa/twitter');
var Instagramicon = require('react-icons/lib/fa/instagram');

class Footer extends React.Component {
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
      <footer className="footer-distributed">

      			<div className="footer-right">

      				<a href="#"><Fbicon/></a>
      				<a href="#"><Twittericon/></a>
      				<a href="#"><Instagramicon/></a>

      			</div>

      			<div className="footer-left">

      				<p className="footer-links">
      					<a href="#">Inicio</a>
      					·
      					<a href="#">Foro</a>
      					·
      					<a href="#">VIP</a>
      					·
      					<a href="#">Sobre Nosotros</a>
      					·
      					<a href="#">F.A.Q</a>
      					·
      					<a href="#">Contacto</a>
      				</p>

      				<p>New Clan Servers &copy; 2017</p>
      			</div>

      		</footer>
    );
  }
};

export default Footer;
