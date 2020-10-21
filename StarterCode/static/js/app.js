// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }

// Use the D3.js library to read in the JSON
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.


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
        let selectionVal = name;
        let options = dropDown.append("option");
        options.text(selectionVal);
        options.attr("value", name);
    
    });
};



