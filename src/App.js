
import React from 'react';
import Home from './temperature/Home.js'


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
