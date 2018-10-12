document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

var linearScale = d3
  .scaleLinear()
  .domain([0, 600])
  .range([0, 100])
  .clamp(true);

console.log(linearScale(25));
console.log(linearScale(500));
