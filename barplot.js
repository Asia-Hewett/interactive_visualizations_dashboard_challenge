// Use the D3 library to read in samples.json.
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

let trace1 = {
    y: temps.newyork,
    name: 'New York',
    type: 'box',
    boxpoints: 'all'
};

let trace2 = {
    y: temps.houston,
    name: 'Houston',
    type: 'box',
    boxpoints: 'all'
};

let data = [trace1, trace2];
let layout = {
    title: 'Temperatures in NY and H Town',
    yaxis: { title: 'Degrees F' }
};

Plotly.newPlot('plot', data, layout);