import React, { Component } from 'react'
import Coins from './components/coins'

class App extends Component {

  state = {
    coins: []
  };


  componentDidMount() {
    
    this.callBackEndApi()
    .then(res => {
    this.setState({coins: res.express.data});
    console.log('coins retrieved');
  })

    setInterval(() => {
      this.callBackEndApi()
        .then(res => {
        this.setState({coins: res.express.data});
        console.log('coins updated');
      })
    }, 60000)
  }
  
  callBackEndApi = async () => {

      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    }
  

  render() {
    
    return (
      <div className="App">
        <Coins coins={this.state.coins}/>
      </div>
    );

  }
}

export default App;
