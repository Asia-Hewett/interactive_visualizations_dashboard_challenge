d3.json("samples.json").then((data) => {
    mydropDown(data);
    console.log(data)
});  