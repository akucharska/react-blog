import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Article from 'organisms/Article';
import Header from 'organisms/Header';

class Contact extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Article title="Contact"/>
      </div>
    );

  }
}
export default CSSModules(Contact, styles, { allowMultiple: true });
