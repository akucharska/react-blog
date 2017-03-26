import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Logo from 'atoms/Logo';
import ContentWrapper from 'molecules/ContentWrapper';
import Menu from 'molecules/Menu';

function Header() {
  const styleName='Header';
  const className='Header__wrapper';
  return (
    <div styleName={styleName}>
      <ContentWrapper className={className}>
        <Logo />
        <Menu />
      </ContentWrapper>
    </div>
  );
}
export default CSSModules(Header, styles, { allowMultiple: true });
