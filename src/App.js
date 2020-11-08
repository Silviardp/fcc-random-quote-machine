import React, { Component } from 'react';
import './App.css';
import Button from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      selectedQuoteIndex: null,
    }
  }

  nextQuoteClickHandler() {
    console.log('hi')
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler}/>
      </div>
   );
  }
}

export default App;
