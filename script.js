
fetch('https://services.swpc.noaa.gov/products/summary/solar-wind-speed.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.TimeStamp)
    let speed  = data.WindSpeed;
    msg.innerHTML="The speed of solar wind is "+speed;
});

