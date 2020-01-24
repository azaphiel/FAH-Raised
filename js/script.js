
 
    
    setInterval(function() {
        document.getElementById("mybutton").click();
      }, 1000);
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
  
        perc = Math.round((total / 100)+990);
        document.getElementById('percentage').innerHTML = "€" + perc;
        document.getElementById('percentageUp').innerHTML = "€1000" ;
        document.getElementById('percentageDown').innerHTML = "€0" ;
        
       
         var bar = new ldBar(".myBar", {
          "preset": "energy",
         });

         var bar2 = new ldBar(".myBar3");
         bar2.set(perc/10, true);

         bar.set(perc/10, true);
        
      }
  
      function percentage(per) {
        return Math.round((100 / 1000) * per);
      }
  
    
     