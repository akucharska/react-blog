import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import ContentWrapper from 'molecules/ContentWrapper';

const propTypes = {
  title: PropTypes.string
};
function Article({ title }) {
  const styleName='Article';
  const styleNameWrapper=`${styleName}__wrapper`;
  return (
    <div styleName={styleName}>
      <ContentWrapper>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor, sit amet...</p>
      </ContentWrapper>
    </div>
  );
}

Article.propTypes = propTypes;

export default CSSModules(Article, styles, { allowMultiple: true });
