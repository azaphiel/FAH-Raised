var image = 0;

setInterval(function() {
  document.getElementById("mybutton2").click();
}, 60*1000);

function advertisement() {
  setTimeout(function() {
    document.getElementById(image).style.display='inline'
  }, 5*1000);
  
  setTimeout(function() {
    document.getElementById(image).style.display='none'
    image++;
  }, 10*1000);
  //-------------------------------------------------
  setTimeout(function() {
    document.getElementById(image).style.display='inline'
  }, 15*1000);
  
  setTimeout(function() {
    document.getElementById(image).style.display='none'
    image++;
  }, 20*1000);
//-------------------------------------------------
  setTimeout(function() {
    document.getElementById(image).style.display='inline'
  }, 25*1000);
  
  setTimeout(function() {
    document.getElementById(image).style.display='none'
    image++;
  }, 30*1000);
//-------------------------------------------------
  setTimeout(function() {
    document.getElementById(image).style.display='inline'
  }, 35*1000);
  
  setTimeout(function() {
    document.getElementById(image).style.display='none'
    image++;
  }, 40*1000);
  //-------------------------------------------------
  image = 0;
}
  
  


    
    setInterval(function() {
        document.getElementById("mybutton").click();
      }, 3000);
      let money = null;
      let total = null;
      
      
      function buttonClickRef() {
        
        fetch("https://api.raisedforyou.com/api/v1/sessions/3B7AEB/donations", {
            method: 'GET'
          })
  
          .then(result => result.json())
          .then(data => {
            
            total = 0;
            for (var c = 0; c < data.length; c++) {
              total += data[c].amount;
            }
            console.log("€" +(total)/100);
          })
  
        var perc = 0;
        var i = 0;
  
        perc = Math.round((total / 100)+490);
        document.getElementById('percentage').innerHTML = "€" + perc;
        document.getElementById('percentageUp').innerHTML = "€1000" ;
        document.getElementById('percentageDown').innerHTML = "€0" ;
        
       
         var bar = new ldBar(".myBar", {
          "preset": "energy",
         });

         
        

         bar.set(perc/10, true);
        
      }
  
      function percentage(per) {
        return Math.round((100 / 1000) * per);
      }
  
    
     