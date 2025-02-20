import React, { Component } from "react";
import * as d3 from "d3";

class Box extends Component {
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
        const { data2 } = this.props;
        if (!data2 || data2.length === 0) return;

        const margin = { top: 40, right: 50, bottom: 50, left: 50 };
        const width = 600;
        const height = 400;
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const svg = d3.select(".container2")
            .attr("width", width)
            .attr("height", height);
        
        const innerChart = svg.select(".inner_chart2")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        data2.forEach(d => {
            d.tip = +d.tip;
        });
        
        const avgTipsByDay = d3.rollup(
            data2,                    
            v => d3.mean(v, d => d.tip),
            d => d.day
        );

        const datatArray = Array.from(avgTipsByDay, ([day, avgTip]) => ({ day, avgTip }));

        const xScale = d3.scaleBand()
            .domain(datatArray.map(d => d.day))
            .range([0, innerWidth])
            .padding(0.3)

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(datatArray, d => d.avgTip)])
            .range([innerHeight, 0])

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        innerChart.select(".x-axis").remove();
        innerChart.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${innerHeight})`)
            .call(xAxis)

        innerChart.select(".y-axis").remove();
        innerChart.append("g")
            .attr("class", "y-axis")
            .call(yAxis)
        
        const bars = innerChart.selectAll("rect").data(datatArray);

        bars.exit().remove();

        bars.enter()
            .append("rect")
            .merge(bars)
            .attr("x", d => xScale(d.day))
            .attr("y", d => yScale(d.avgTip))
            .attr("width", xScale.bandwidth())
            .attr("height", d => innerHeight - yScale(d.avgTip))
            .attr("fill", "#69b3a2");

        // Add x-axis label
        svg.select(".x-label").remove();
        svg.append("text")
            .attr("class", "x-label")
            .attr("x", width / 2)
            .attr("y", height - 15)
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .text("Day of the Week");

        // Add y-axis label
        svg.select(".y-label").remove();
        svg.append("text")
            .attr("class", "y-label")
            .attr("x", -height / 2)
            .attr("y", 20)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .attr("font-size", "14px")
            .text("Average Tip ($)");

        // Add chart title
        svg.select(".title").remove();
        svg.append("text")
            .attr("class", "title")
            .attr("x", width / 2)
            .attr("y", 25)
            .attr("text-anchor", "middle")
            .attr("font-size", "16px")
            .attr("font-weight", "bold")
            .text("Average Tips by Day");

    }

    render() {
        return (
            <svg className="container2">
                <g className="inner_chart2"></g>
            </svg>
        );
    }
}

export default Box;