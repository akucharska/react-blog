import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class MainPage extends React.Component {
  render(){
    return (
      <div>
        <h1 styleName='MainPage_title'>Lorem ipsum dolor!!!</h1>
        <div>Lorem ipsum dolors sit amet...</div>
      </div>
    );

  }
}
export default CSSModules(MainPage, styles, { allowMultiple: true });
