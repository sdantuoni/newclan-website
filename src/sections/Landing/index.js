'use strict';
import React from 'react';
import ReactF1 from 'react-f1';
import ScrollableAnchor from 'react-scrollable-anchor';
import states from './states';
import transitions from './transitions';
import Header from '../../components/header';
import Slider from '../../components/slider';
import Info from '../../components/info';
import Footer from '../../components/footer';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'out'
    };
  }
  componentWillEnter(done) {
    this.setState({
      state: 'idle',
      onComplete: done
    });
  }
  componentWillLeave(done) {
    this.setState({
      state: 'out',
      onComplete: done
    });
  }
  render() {
    return (
<div>
  <div className="wrapper" id="wrapper">
        <div className="head"><Header/></div>
          <article className="body" id="body">
            <div className="big">
              <Slider/>
              {/* <ScrollableAnchor id={'info'}><Info /></ScrollableAnchor> */}
              <section id="info"><Info/></section>
            </div>
          </article>
        </div>
  <div className="foot"><Footer/></div>
</div>
    );
  }
};

export default Landing;
