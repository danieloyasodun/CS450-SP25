import React, { Component } from 'react';
import './App.css';
import Scatter from './Scatter';
import Bar from './Bar';
import tips from './tips.csv';
import * as d3 from 'd3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    var self = this
    d3.csv(tips).then(function(csv_data){
      self.setState({data: csv_data})
      //console.log(csv_data)
    })
    .catch(function(err) {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        <div className="child1"><Scatter data1={this.state.data}></Scatter></div>
        <div className="child2"><Bar data2={this.state.data}></Bar></div>
      </div>
    );
  }
}

export default App;
