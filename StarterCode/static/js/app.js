// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }

// // Read the json, assign it to a variable then call the function to populate the dropdown menu
d3.json("../../data/samples.json").then((subjectData) => {
    dropDown(subjectData);
    // console.log(subjectData)
});

// Populate the dropdown with the data from json
function dropDown(subjectData) {
    
    //Grab the test subject ID # from the data (names field)
    let subjectValue = subjectData.names;
    let dropDown = d3.select("#selDataset");
    dropDown.html("");

    //Populate the dropdown options with the sample "names" (test subject ID #)
    subjectValue.forEach((name) => {
        let selectionVal = name;
        let options = dropDown.append("option");
        options.text(selectionVal);
        options.attr("value", name);
    
    });
};

