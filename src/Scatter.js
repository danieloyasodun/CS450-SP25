import React, { Component } from "react";
import * as d3 from "d3";

class Scatter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    
    componentDidMount() {
        this.drawChart();
    }

    componentDidUpdate() {
        this.drawChart();
    }

    drawChart() {
        const { data1 } = this.props;
        if( !data1 || data1.length === 0 ) return;

        const margin = { top: 40, right: 50, bottom: 50, left: 50 };
        const width = 600;
        const height = 400;
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const svg = d3.select(".container")
            .attr("width", width)
            .attr("height", height);

        const innerChart = svg.select(".inner_chart")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        // Convert data values to numbers
        data1.forEach(d => {
            d.total_bill = +d.total_bill;
            d.tip = +d.tip;
        });

        // Define scales
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data1, d => d.total_bill)])
            .range([0, innerWidth]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data1, d => d.tip)])
            .range([innerHeight, 0]); // Flip because SVG y-coordinates increase downward

        // Define axes
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        // Append x-axis
        innerChart.select(".x-axis").remove();
        innerChart.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${innerHeight})`)
            .call(xAxis);

        // Append y-axis
        innerChart.select(".y-axis").remove();
        innerChart.append("g")
            .attr("class", "y-axis")
            .call(yAxis);

        // Bind data points
        const circles = innerChart.selectAll("circle").data(data1);

        // Remove old circles
        circles.exit().remove();

        // Add new circles
        circles.enter()
            .append("circle")
            .merge(circles)
            .attr("cx", d => xScale(d.total_bill))
            .attr("cy", d => yScale(d.tip))
            .attr("r", 5)
            .attr("fill", "#69b3a2");

        // Add x-axis label
        svg.select(".x-label").remove();
        svg.append("text")
            .attr("class", "x-label")
            .attr("x", width / 2)
            .attr("y", height - 15)
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .text("Total Bill ($)");

        // Add y-axis label
        svg.select(".y-label").remove();
        svg.append("text")
            .attr("class", "y-label")
            .attr("x", -height / 2)
            .attr("y", 15)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .text("Tips ($)");

        // Add chart title
        svg.select(".title").remove();
        svg.append("text")
            .attr("class", "title")
            .attr("x", width / 2)
            .attr("y", 25)
            .attr("text-anchor", "middle")
            .attr("font-size", "16px")
            .attr("font-weight", "bold")
            .text("Total Bill vs. Tips");

    }
    
    render() {
        return (
            <svg className="container">
                <g className="inner_chart"></g>
            </svg>
        );
    }
}

export default Scatter;