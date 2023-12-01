function breweryData(){
    let promise = new Promise((resolve, reject) => {
        
  
        var stateName = document.getElementById('stateName').value;
        console.log(stateName)

        var book = fetch("https://api.openbrewerydb.org/v1/breweries")
book.then((data)=>data.json()).then((data1)=>{console.log(data1)

 for (var i=0; i<data1.length; i++){
if(data1[i].city==stateName){
         var Country=data1[i].country;
         var Phonenumber=data1[i].phone
        }
      }
      var mfgCard = document.getElementById('mfgCard');
        mfgCard.innerHTML = `<div class="card" style="width: 18rem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9edqDBN6RCQgYRpwxTPBzcyKiTg5gZz3oYQ&usqp=CAU" class="card-img-top" alt="covid image">
            <div class="card-body">
              <h5 class="card-title">Brewery Data</h5>
              <p class="card-text">Country: ${Country}</p>
              <p class="card-text">Phonenumber: ${Phonenumber}</p>
            
            </div>
          </div>`
    })
})
}


