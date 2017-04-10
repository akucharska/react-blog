import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const propTypes = {
  className: PropTypes.string
};

function ContentWrapper({ children, className }) {
  const styleName='ContentWrapper';
  return (
    <div
      styleName={styleName}
      className={className}
    >
      { children }
    </div>
  );
}

ContentWrapper.propTypes = propTypes;

export default CSSModules(ContentWrapper, styles, { allowMultiple: true });
