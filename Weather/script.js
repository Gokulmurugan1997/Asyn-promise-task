function weatherdata(){
    let promise = new Promise((resolve,reject)=>{
        let cityName = document.getElementById('cityName').value;
        let request= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a43292ebbf1482b46db85b4a44f4a740`);
        
        if(request.status==200){
                var data = request.then((data2)=>data2.json()).then((data1)=>{console.log(data1)})
                
        resolve(data)
            }
            else{
                reject("some error occured")
            }
        
    })
    promise.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
    }weatherdata()

// function weatherdata(){
// let promise = new Promise((resolve,reject)=>{

//     var request = new XMLHttpRequest();
//     let cityName = document.getElementById('cityName').value;
//     request.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a43292ebbf1482b46db85b4a44f4a740`);
    
//     request.send();
   
//     request.onload = function(){
//         if(request.status==200){
//             var data = JSON.parse(request.response)
//     resolve(data)
//         }
//         else{
//             reject("some error occured")
//         }
//     }
// })
// promise.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
// }weatherdata()
