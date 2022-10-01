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

});
ox.addEventListener("input",()=>{
  console.log("oxygen val is: "+ox.value);
});
wind.addEventListener("input",()=>{
  console.log("wind val is: "+wind.value);
});
date.addEventListener("input",()=>{
  console.log("user choose date: "+date.value);
});

