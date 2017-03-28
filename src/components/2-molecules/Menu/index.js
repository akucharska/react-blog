import React from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

function Menu() {
  const styleName='Menu';
  const styleNameItem='Menu__item';
  const styleNameLink='Menu__link';
  return (
    <ul styleName={styleName}>
      <li styleName={styleNameItem}>
        <NavLink
          exact
          activeClassName="Menu__link--active"
          to="/"
          styleName={styleNameLink}
        >
          Strona Główna
        </NavLink>
      </li>
      <li styleName={styleNameItem}>
        <NavLink
          activeClassName="Menu__link--active"
          to="/articles"
          styleName={styleNameLink}
        >
          Artykuły
        </NavLink>
      </li>
      <li styleName={styleNameItem}>
        <NavLink
          activeClassName="Menu__link--active"
          to="/contact"
          styleName={styleNameLink}
        >
          Kontakt
        </NavLink>
      </li>
    </ul>
  );
}
export default CSSModules(Menu, styles, { allowMultiple: true });
