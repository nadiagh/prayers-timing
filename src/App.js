import React, { Component } from 'react';
import './App.css';







class App extends Component {
    constructor(){
        super()
        this.state={
            time:[]
        }
    }

    componentDidMount(){

        fetch('http://api.aladhan.com/v1/timingsByCity?city=Mahdia&country=Tunisia&method=1&midnightMode=1')
            .then(response=>response.json())
            .then(data=>{

                const arr=Object.entries(data.data.timings);
                this.setState({time:arr})
                 console.log(this.state.time)

            });

        }





   
  

  render() {
    return (
      <div className="App" style={{overflowY:"scroll"}}>

          <p>helllllo</p>
          </div>
    );
  }
}

export default App;
