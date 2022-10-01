const req = new XMLHttpRequest();
req.open("GET", "https://services.swpc.noaa.gov/products/summary/solar-wind-speed.json", true);
req.send();
req.onload = function () {
  const json = JSON.parse(req.responseText);
  console.log(json)
};