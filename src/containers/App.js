import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Articles from 'pages/Articles';
import Contact from 'pages/Contact';
import MainPage from 'pages/MainPage';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route path="/articles" component={Articles} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
