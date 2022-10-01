function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();
// Get the real time kp value
function getKpNow(){
  fetch('https://services.swpc.noaa.gov/products/noaa-estimated-planetary-k-index-1-minute.json')
    .then((response) => response.json())
    .then((data) => {
      let now = data[data.length-1]
      console.log(now[1]);
  });
}
showNow.addEventListener("click",getKpNow);

n2.addEventListener("input",()=>{
  console.log("nitrogen val is: "+n2.value);
  n2Val.innerHTML=n2.value;
  generateAurora();

});
ox.addEventListener("input",()=>{
  console.log("oxygen val is: "+ox.value);
  oxVal.innerHTML=ox.value;
  generateAurora();
});
wind.addEventListener("input",()=>{
  console.log("wind val is: "+wind.value);
  windVal.innerHTML=wind.value;
  generateAurora();
});
date.addEventListener("input",()=>{
  console.log("user choose date: "+date.value);
});
const inputs = document.querySelector("form");
const glow = document.querySelector("main");
glow.style.background ="radial-gradient(closest-side,rgba(221, 250, 114, 1) 0%,rgba(128, 250, 57, 1) 30%,rgba(0, 212, 255, 0) 100%)";
// aurora calculation
function generateAurora(){
  console.log("change");
  let green = wind.value;
  glow.style.background =
    "radial-gradient(closest-side,rgba(221, 250, 114, 1) 0%,rgba(128, 250, 57, 1)" +
    green +
    "%,rgba(0, 212, 255, 0) 100%)";
};


