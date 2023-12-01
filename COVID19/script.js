function covidData(){
    let promise = new Promise((resolve, reject) => {
        
  
        var stateName = document.getElementById('stateName').value;

        var res= fetch("https://data.covid19india.org/v4/min/timeseries.min.json");
        
        res.then((data2)=>data2.json()).then((data1)=>{
console.log(data1)
          var count=0;
          var count2=0;
        for (const x in data1) {
          if (Object.hasOwnProperty.call(data1, x)) {
            var element = data1[x];
          }
        }
        for (const y in element) {
          if (Object.hasOwnProperty.call(element, y)) {
            var element1 = element[y];
          }
        }
        for (const z in element1) {
          if (Object.hasOwnProperty.call(element1, z)) {
            var element2 = element1[z];

            count = count + Number(element2.total.confirmed)
            
            
          }
        }
        for (const a in data1[stateName]) {
          if (Object.hasOwnProperty.call(data1[stateName], a)) {
            var element3 = data1[stateName][a];
            
          }
        }
        for (const b in element3) {
          if (Object.hasOwnProperty.call(element3, b)) {
            var element4 = element3[b];
            count2 = count2 + Number(element2.total.confirmed)
          }
        }
         var covidCard = document.getElementById('covidCard');
        covidCard.innerHTML = `<div class="card" style="width: 18rem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9edqDBN6RCQgYRpwxTPBzcyKiTg5gZz3oYQ&usqp=CAU" class="card-img-top" alt="covid image">
            <div class="card-body">
              <h5 class="card-title">COVID19 Data</h5>
              <p class="card-text">Total covid19 cases: ${count} </p>
              <p class="card-text">Total covid19 cases of ${stateName}: ${count2} </p>

            
            </div>
          </div>`
    })
})
}
    

