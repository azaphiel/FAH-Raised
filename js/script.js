
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
        
        
        var bar = new ldBar(".myBar", {
          "stroke": '#f00',
          "stroke-width": 1,
          "preset": "stripe",
          "value": 0
          
         });
         bar.set(
         perc/10,     /* target value. */
         true   /* enable animation. default is true */
       );
        
      }
  
     
  
  
      function percentage(per) {
        return Math.round((100 / 1000) * per);
      }
  
      $(document).ready(function() {
        var skillBar = $('.inner');
        var skillVal = skillBar.attr("data-progress");
        $(skillBar).animate({
          height: skillVal
        }, 3000);
  
      })
     