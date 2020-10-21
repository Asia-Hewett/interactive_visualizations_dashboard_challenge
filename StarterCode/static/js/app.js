// Use the D3.js library to read in the JSON
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

// Generating the data for the drop down menu

d3.json("../../data/samples.json").then((subjectData) => {
    dropDown(subjectData);
    // console.log(subjectData)
});

function dropDown(subjectData) {
    // the data field is subjectData.names (don't forget the 's' at the end of name...)
    let subjectValue = subjectData.names;
    let dropDown = d3.select("#selDataset");
    dropDown.html("");

    // dropdown menu to display the top 10 OTUs found in that individual
    subjectValue.forEach((name) => {
        let selectionName = name;
        let options = dropDown.append("option");
        options.text(selectionName);
        options.attr("optionChanged", name);
        
    });
};

// Creating the event handler for the dropdown menu

d3.selectAll("#selDataset").on("change", updatePage);

function updatePage() {
    let dropDownMenu = d3.selectAll("#selDataset");
    let sampleValues = dropDownMenu.subjectData.sample_values;
    let otuIds = dropDownMenu.subjectData.otu_ids;
    let otuLabels = dropDownMenu.subjectData.otu_labels;
    console.log(sampleValues);
    console.log(otuIds);
    console.log(otuLabels)

    let trace1 = [{
        type: 'bar',
        x: [20, 14, 23],
        y: ['giraffes', 'orangutans', 'monkeys'],
        orientation: 'h'
      }];
      
      Plotly.newPlot('bar', data);

    Plotly.newPlot();
}




