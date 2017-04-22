import React from 'react';
import { Link } from 'react-router';
import componentsManifest from './manifest';

function getManifestMenu() {
  return (
    <div className={'manifest-menu'}>
      {
        Object.keys(componentsManifest)
          .map((componentName) => {
            return (
              <Link to={`/test/${componentName}`} key={componentName}>
                {componentName}
              </Link>
            );
          })
      }
    </div>
  );
}

class Test extends React.Component {
  render() {
    const props = this.props;
    const pathname = props.location.pathname;
    const key = pathname.split('/')[1] || 'root';
    const isIndexPage = (key === 'root');
    const classes = ['test-container', props.className].filter(Boolean);
    const {windowWidth, windowHeight} = props;

    return (
      <div className={classes.join(' ')}>
        {isIndexPage && getManifestMenu()}
        {
          (props.children) && React.cloneElement(props.children, {
            key,
            windowWidth,
            windowHeight,
          })
        }
      </div>
    );
  }
}

export default Test;