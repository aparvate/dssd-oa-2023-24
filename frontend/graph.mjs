const graphDiv = document.getElementById("graph");

var layout = {
    title:'COVID-19 Hospitalizations vs Deaths',
    xaxis: {
        title: 'COVID-19 Hospitalizations',
        showgrid: false
      },
      yaxis: {
        title: 'COVID-19 Deaths',
        showline: false
      }
};

const config = {scrollZoom: true, responsive: true};

fetch(
    "https://aparvate-dssd-oa-2023-24.onrender.com/" //use "http://localhost:3000" if running sample express backend locally, or replace with your own backend endpoint url
).then(async res => {
    Plotly.newPlot(graphDiv, [await res.json()], layout, config); 
})

