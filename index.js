function Weight(){
    let D = document.getElementById('Diameter').value;
    let L = document.getElementById('Length').value;
    let wt = (3.14*D/2*D/2*L*0.785) / 100000;
    let total = wt.toFixed(4);
    document.getElementById('Result').innerHTML = total;    
 
}

function clear(){
    let element = document.getElementById("clear");
     element.reset()
  }

// function weight(){
//     console.log((3.14*10*10*100*0.785) / 100000);
//     return ;
// }

// weight();
