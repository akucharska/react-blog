import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Article from 'organisms/Article';
import Header from 'organisms/Header';

class MainPage extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Article title="Tytuł"/>
      </div>
    );

  }
}
export default CSSModules(MainPage, styles, { allowMultiple: true });
