var width = 500;
var height = 500;
var padding = 50

var data = [
	[0,0],
	[100,200],
	[300,400],
	[250,350],
	[75,25],
	[600, 800],
	[-35, 47],
	[300, -72]
]

var colors = {
	"G": "green",
	"PG": "yellow",
	"PG-13": "orange",
	"R": "red"
}

var xScale = d3.scaleLinear()
							 .domain(d3.extent(movies, d=> d.runtime))
							 .range([padding, width - padding])

var yScale = d3.scaleLinear()
							 .domain(d3.extent(movies, d => d.total))
							 .range([height-padding, padding])

d3.select("svg")
		.attr('width', width)
		.attr('height', height)
	.selectAll("circle")
	.data(movies)
	.enter()
	.append("circle")
		.attr('cx', d => xScale(d.runtime))
		.attr('cy', d=> yScale(d.total))
		.attr('r', () => 20 + 'px')
		.attr('fill', d=>colors[d.rating]);
