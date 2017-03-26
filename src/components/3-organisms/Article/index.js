import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import ContentWrapper from 'molecules/ContentWrapper';

function Article({}) {
  const styleName='Article';
  const styleNameWrapper=`${styleName}__wrapper`;
  return (
    <div styleName={styleName}>
      <ContentWrapper>
        <h2>Title</h2>
        <p>Lorem ipsum dolor, sit amet...</p>
      </ContentWrapper>
    </div>
  );
}
export default CSSModules(Article, styles, { allowMultiple: true });
