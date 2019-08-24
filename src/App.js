import React from 'react';
import AppContainer from './routes/Router';

console.disableYellowBox = true;

class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

export default App;