import React, { Component } from "react";
import "./App.css";
import FileUpload from "./FileUpload";
import * as d3 from 'd3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      selected_data:[],
      sentimentColors : { positive: "green", negative: "red", neutral: "gray" }
    };
  }

  componentDidMount(){
    this.renderChart()
  }

  componentDidUpdate() {
    this.renderChart()
  }

  set_data = (csv_data) => {
    this.setState({ data: csv_data });
  }

  renderChart=()=>{
    const {data , sentimentColors} = this.state;

    if (data.length === 0 ) {
      return;
    }

    var margin ={left:50,right:150,top:10,bottom:10},width = 500,height=300;
    var innerWidth = width - margin.left - margin.right;
    var innerHeight = height - margin.top - margin.bottom;

    d3.select("svg").selectAll("*").remove();
    
    const svg = d3.select("svg").attr("width", width).attr("height", height).append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear().domain(d3.extent(data, (d) => +d["Dimension 1"])).range([0, innerWidth]);
    const yScale = d3.scaleLinear().domain(d3.extent(data, (d) => +d["Dimension 2"])).range([0, innerHeight]);

    svg.selectAll("circle")
      .data(data).enter()
      .append("circle")
      .attr("cx", (d) => xScale(+d["Dimension 1"]))
      .attr("cy", (d) => yScale(+d["Dimension 2"]))
      .attr("r", 5)
      .attr("fill", (d) => sentimentColors[d.PredictedSentiment] || "black");
    
      const legendData = [
        { sentiment: "positive", color: "green" },
        { sentiment: "negative", color: "red" },
        { sentiment: "neutral", color: "gray" }
      ];

      const legend = svg.append("g").attr("transform", `translate(0, ${innerHeight - 30})`);

      legend
        .selectAll("circle")
        .data(legendData)
        .enter()
        .append("circle")
        .attr("cx", 300)
        .attr("cy", (_, i) => i - 250 + (16*i))
        .attr("r", 5)
        .attr("fill", (d) => d.color);

      legend
        .selectAll("text")
        .data(legendData)
        .enter()
        .append("text")
        .attr("x", 310)
        .attr("y", (_, i) => i * 4 - 250 + (13*i))
        .text((d) => d.sentiment)
        .attr("font-size", "12px")
        .attr("fill", "black");
    
      var brush = d3.brush().on('start brush', (e) => {
      if (!e.selection) return;

      const [[x0, y0], [x1, y1]] = e.selection;

      const filtered_data = data.filter(d => {
        const x = xScale(+d["Dimension 1"]);
        const y = yScale(+d["Dimension 2"]);
        return (
          x >= x0 - margin.left &&
          x <= x1 - margin.left &&
          y >= y0 - margin.top &&
          y <= y1 - margin.top
        );
      });

      this.setState({ selected_data: filtered_data });
    });

    d3.select('svg').call(brush);
  }

  render() {
    const {selected_data, sentimentColors} = this.state;

    return (
      <div>
        <FileUpload set_data={this.set_data}></FileUpload>
        <div className="parent">
          <div className="child1 item"> 
          <h2>Projected Tweets</h2> 
            <svg className="container">
            </svg> 
          </div>
          <div className="child2 item">
            <h2>Selected Tweets</h2> 
            <div className="tweets">
            {selected_data.length > 0 ? (
                selected_data.map((d, index) => (
                  <p
                    key={index}
                    style={{ color: sentimentColors[d.PredictedSentiment] || "black" }}
                  >
                    {d.Tweets}
                  </p>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
