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

