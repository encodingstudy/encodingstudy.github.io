(() => {const data = [
  [1,1,7],
  [1,25,3],
  [1,29,1],
  [1,30,1],
  [2,2,2],
  [2,3,5],
  [2,4,1],
  [2,14,3],
  [2,19,2],
  [2,20,1],
  [2,22,1],
  [2,26,1],
  [3,5,5],
  [3,7,4],
  [3,15,5],
  [3,31,1],
  [3,36,1],
  [4,5,3],
  [4,7,1],
  [4,27,2],
  [4,32,4],
  [5,8,9],
  [5,11,2],
  [5,24,3],
  [5,43,1],
  [6,9,1],
  [6,10,3],
  [6,12,9],
  [6,23,1],
  [6,39,1],
  [7,13,8],
  [7,16,4],
  [7,18,1],
  [7,28,1],
  [8,15,1],
  [8,16,1],
  [8,17,7],
  [8,37,2],
  [9,21,3],
  [9,24,5],
  [9,33,1],
  [9,34,2],
  [9,35,1],
  [9,38,2],
  [10,22,1],
  [10,23,8],
  [10,38,1],
  [11,21,3],
  [11,24,7], 
  [11,34,2],
  [11,35,2],
  [11,46,2],
  [12,23,10],
  [12,44,1],
  [12,47,1],
  [13,6,4],
  [13,40,9],
  [13,48,1],
  [14,6,2],
  [14,40,9],
  [14,48,2],
  [15,8,3],
  [15,24,1],
  [15,41,9],
  [15,42,1],
  [15,45,1],
];

const colNames = [
  'Reposition a few Points 	',
  'Stack Points Vertically	',
  'Reposition Points Vertically	',
  'Regroup a few Points	',
  'Reposition to Target	',
  'Retop to Target	',
  'Reposition to Tick Mark	',
  'Overlay Bars	',
  'Sloping Bars	',
  'Reposition Tallest & Shortest	',
  'Stack two Bars	',
  'Reposition Bars by Height	',
  'Resize a few Points Equally	',
  'Resize & Reposition to Axis	',
  'Resize Point	',
  'Select & Resize	',
  'Resize by Values	',
  'Cover & Resize	',
  'Recolor one Group	',
  'Recolor Groups	',
  'Select & Recolor One	',
  'Select & Recolor Group	',
  'Recolor by Values	',
  'Recolor a few Points	',
  'Reposition & Resize	',
  'Stack & Enclose 	',
  'Reposition to Target & Resize	',
  'Resize & Move out	',
  'Reposition Inline and Recolor	',
  'Reposition by Range & Recolor	',
  'Recolor, Reposition & Recolor	',
  'Reposition to Target & Recolor 	',
  'Regroup & Recolor	',
  'Recolor & Paint	',
  'Recolor & Dip	',
  'Resize a Point and Recolor	',
  'Resize & Recolor	',
  'Cover & Recolor	',
  'Reheight Ascending	',
  'Reheight to Target	',
  'Enwidth	',
  'Enheight & Enwidth	',
  'Reposition & Enwidth	',
  'Recolor & Enwidth	',
  'Enwidth & Recolor 	',
  'Enwidth & Cover 	',
  'Intersect & Recolor 	',
  'Recolor & Reheight',
]
const rowNames = [
  'O1: Assign a data attribute to an axis',
  'O2: Switch from a scatterplot to a bar chart',
  'O3: Navigate the point over time in a scatterplot',
  'O4: Adjust the value of a data point',
  'O5: Group the two bars into one bar',
  'O6: Sort the bar chart',
  'O7: Change the size of all data points',
  'O8: Assign a data attribute to the size of points',
  'O9: Change the color of all points',
  'O10: Assign a data attribute to the color of points',
  'O11: Change the color of all bars',
  'O12: Assign a data attribute to the color of all bars',
  'O13: Navigate the point over time in a bar chart',
  'O14: Adjust the value of a bar',
  'O15: Expand the range of a bin in a histogram',
];

const colDescriptions = [
  "Rearrange a few points to sort them based on their values",
  "Rearrange a few points to position them vertically where they have some overlaps",
  "Rearrange a few points to position them vertically where they have no overlap",
  "Rearrange a few points to put them close together",
  "Move a point to the target value",
  "Moving a bar so the top of the bar aligns with the target value",
  "Move a point to the tick mark representing the target value",
  "Move one bar on the top of another bar so they overlay",
  "Move bars vertically to sort them based on their heights to create ascending or descending slope",
  "Move the tallest bar to one extreme, then the shortest bar to another extreme",
  "Stack one bar on the top of another one",
  "Move a few bars based on their heights",
  "Resize a few points equally",
  "Resize a few points, then move them to the tick marks on the axis",
  "Resize a point to the target value",
  "Select a set of points and resize them",
  "Resize a few data points differently based on their values",
  "Make one point big to cover few other points",
  "Color few points that fall in the same range using the same color",
  "Color few points that fall in different ranges differently",
  "Select all points, then color one of them",
  "Select a set of points and color them",
  "Color a set of points based on their values",
  "Color a few points using the same color",
  "Rearrange a few points to sort them based on their values, then resize them",
  "Rearrange a few points to stack them vertically, then resize a circle to enclose the stack",
  "Reposition a point to target value, then resize it",
  "Resize a point, then move it out of the visualization",
  "Rearrange a few points vertically/horizontally, then color them",
  "Rearrange a few points based on a range of values, then color them",
  "Color a point, then move a second point to the target value and color it the same color as the first point",
  "Move the point to the target value, then color it",
  "Move a few points closer together, then color them",
  "Change the color of one data point, then move it over other points",
  "Color a point, then move other data points over it",
  "Resize a single point, then color it",
  "Resize points based on their values, then color them",
  "Make one point big to cover other points, then color it",
  "Changing the height of the bar in an ascending order",
  "Changing the height of the bar to the target vlaue",
  "Increase the width of the bar",
  "Increase the height of the bar to exceed the x axis, then increase its width",
  "Drag two bars close together, then increase the width of one of the bars",
  "Color two bars and increase the width of one of the bars to cover all the other bars",
  "Increase the width of the bar, then color it",
  "Increase the width of a bar to cover all the other bars, then color it",
  "Drag the bottom of the bar to intersect with the tick mark, then color it",
  "Color the bar, then change its height to the target value",
]


const table = d3.select('#interactive-table').append('table')

const headerRow = table.append('tr');

headerRow.append('th')
  .classed('header-both bold vert-text', true)
  .append('div')
  .text('Names');

const headerRowDiv = headerRow
  .selectAll('.header-col')
  .data(colNames)
  .enter()
  .append('th')
  .on('mouseenter', (d, i) => {
    table.selectAll('.col-' + i)
      .classed('highlighted', true);
    table.select('#tip-' + i)
      .classed('show', true);
  })
  .on('mouseleave', (d, i) => {
    table.selectAll('.col-' + i)
      .classed('highlighted', false);
    table.select('#tip-' + i)
      .classed('show', false);
  })
  .attr('class', (d,i) => 'header-col col-' + i)
  .append('div')
  .classed('header-col-div', true)

headerRowDiv
  .append('div')
  .classed('vert-text', true)
  .text(d => d);

headerRowDiv
  .append('div')
  .classed('tip', true)
  .attr('id', (d, i) => 'tip-' + i)
  .text((d, i) => colDescriptions[i]);

const rows = table.selectAll('.row')
  .data(rowNames)
  .enter()
  .append('tr')
  .classed('row', true)
  .attr('id', (d,i) => 'row-' + i)
 
rows.append('th')
  .classed('header-row', true)
  .append('div')
  .text(d => d)

rows.selectAll('.cell')
  .data(colNames)
  .enter()
  .append('td')
  .attr('class', (d,i) => 'col-' + i)
  .classed('cell', true)
  .on('mouseenter', (d, i) => {
    table.selectAll('.col-' + i)
      .classed('highlighted', true);
  })
  .on('mouseleave', (d, i) => {
    table.selectAll('.col-' + i)
      .classed('highlighted', false);
  })
  .append('div')

for (const d of data) {
  const [row, col, val] = d;
  table.select('#row-' + (row - 1))
    .select('.col-' + (col - 1))
    .style('background-color', `rgba(0, 0, 0, ${(val/10)**1.2})`)
    .select('div')
    .style('color', val >= 5 ? 'white' : 'black')
    .text(val)


}

})()



