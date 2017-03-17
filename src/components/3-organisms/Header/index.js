import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Menu from 'molecules/Menu';

function Header() {
  const styleName='Header';
  return (
    <div styleName={styleName}>
      <Menu />
    </div>
  );
}
export default CSSModules(Header, styles, { allowMultiple: true });
