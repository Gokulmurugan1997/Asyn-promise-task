function weatherData(){
    let promise = new Promise((resolve, reject) => {
        
  
        var cityName = document.getElementById('cityName').value;

        var res= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a43292ebbf1482b46db85b4a44f4a740`);
        console.log(res)
        res.then((data2)=>data2.json()).then((data1)=>{console.log(data1)

         var weatherCard = document.getElementById('weatherCard');
        weatherCard.innerHTML = `<div class="card" style="width: 18rem">
            <img src="https://img.freepik.com/free-vector/watercolor-weather-effects-collection_23-2149115331.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698969600&semt=sph" class="card-img-top" alt="weather image">
            <div class="card-body">
              <h5 class="card-title">Weather Data</h5>
              <p class="card-text">Temperature: ${data1.main.temp} </p>
              <p class="card-text">Windspeed: ${data1.wind.speed} </p>
            
            </div>
          </div>`
    })
})
}
    
  