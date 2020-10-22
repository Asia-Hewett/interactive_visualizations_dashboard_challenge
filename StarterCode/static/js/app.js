// Use the D3.js library to read in the JSON
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

// Generating the data for the drop down menu


let allSubjectData = [];

d3.json("../../data/samples.json").then((subjectData) => {
    dropDown(subjectData);
    allSubjectData = subjectData
    console.log(allSubjectData)
});

function dropDown(subjectData) {
    // the data field is subjectData.names (don't forget the 's' at the end of name...)
    let subjectValue = subjectData.names;
    let dropDown = d3.select('#selDataset');
    dropDown.html("");

    // dropdown menu to display the top 10 OTUs found in that individual
    subjectValue.forEach((name) => {
        let selectionName = name;
        let options = dropDown.append("option");
        options.text(selectionName);
        options.node().value;
        
    });
};

// Creating the event handler for the dropdown menu

d3.selectAll("#selDataset").on("change", updateDropdown);


function updateDropdown() {
    let dropDownMenu = d3.selectAll("#selDataset");
    let sampleValues = allSubjectData.samples[0].sample_values;
    let otuIds = allSubjectData.samples[0].otu_ids;
    let otuLabels = allSubjectData.samples[0].otu_labels;
    
    // console.log(sampleValues);
    // console.log(otuIds);
    // console.log(otuLabels)

    // This is suppose to filter out the top 10 OTUs 
    let filteredData = allSubjectData.filter(otuLabels => otuLabels.slice[0, 10] === top10otus);
      console.log(filteredData);

    // Clearing the previously entered data
    tbody.html("")

    // Loop that appends data to tables
    Object.entries(sightingInfo).forEach(([key, value]) => {
        console.log(key, value);
        let cell = row.append('td');
        cell.text(value);

    });
}
