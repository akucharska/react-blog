import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Article from 'organisms/Article';
import Header from 'organisms/Header';

class Articles extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Article title="Articles"/>
      </div>
    );

  }
}
export default CSSModules(Articles, styles, { allowMultiple: true });
