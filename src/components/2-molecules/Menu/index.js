import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Link from 'atoms/Link';

function Menu() {
  const styleName='Menu';
  const styleNameItem='Menu__item';
  const styleNameLink='Menu__link';
  return (
    <ul styleName={styleName}>
      <li styleName={styleNameItem}>
        <Link styleName={styleNameLink}>
          Strona Główna
        </Link>
      </li>
      <li styleName={styleNameItem}>
        <Link styleName={styleNameLink}>
          Artykuły
        </Link>
      </li>
      <li styleName={styleNameItem}>
        <Link styleName={styleNameLink}>
          Kontakt
        </Link>
      </li>
    </ul>
  );
}
export default CSSModules(Menu, styles, { allowMultiple: true });
