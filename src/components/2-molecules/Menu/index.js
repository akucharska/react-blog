import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Link from 'atoms/Link';

function Menu() {
  const styleName='Menu';
  return (
    <ul styleName={styleName}>
      <li>
        <Link>
          Strona Główna
        </Link>
      </li>
      <li>
        <Link>
          Artykuły
        </Link>
      </li>
      <li>
        <Link>
          Kontakt
        </Link>
      </li>
    </ul>
  );
}
export default CSSModules(Menu, styles, { allowMultiple: true });
