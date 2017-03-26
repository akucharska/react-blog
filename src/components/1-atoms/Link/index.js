import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

function Link({ children, className }) {
  const styleName='Link';
  return (
    <a
      className={className}
      styleName={styleName}
    >
      {children}
    </a>
  );
}


export default CSSModules(Link, styles, { allowMultiple: true });
