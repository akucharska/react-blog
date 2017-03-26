import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

function Logo() {
  const styleName='Logo';
  return (
    <div styleName={styleName}>
      React Blog
    </div>
  );
}


export default CSSModules(Logo, styles);
