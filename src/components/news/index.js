'use strict';
import React from 'react';
var Servericon = require('react-icons/lib/fa/server');
var Userplus = require('react-icons/lib/fa/user-plus');

class News extends React.Component {
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
        <div className="news-container">
          <div className="news-content">
            <h2>Titulo de la noticia</h2>
            <p>asdknaskldalsdalsmdlasdlas dasd asdkasndkasndknaskjdnaskdnaksjndkajsndjkasndjka</p>
            <p>asdknaskldalsdalsmdlasdlas dasd asdkasndkasndknaskjdnaskdnaksjndkajsndjkasndjka</p>
            <p>asdknaskldalsdalsmdlasdlas dasd asdkasndkasndknaskjdnaskdnaksjndkajsndjkasndjka</p>
            <img src=""/>
          </div>
        </div>
      </div>
    );
  }
};

export default News;
