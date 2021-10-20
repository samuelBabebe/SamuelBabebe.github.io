window.onload = function(){
    let butn = document.getElementById("coursesort")
    let projectlist = document.getElementById("projectlist")
   
    
    let table = document.getElementById("projectlist")
    let sortbydate = document.getElementById("sortbydate")
    let sortbydificult = document.getElementById("sortbydificulty")
   
    let ppage = document.getElementById("ppage")
    let machine = document.getElementById("mchine")
    let rosca = document.getElementById("rosca")
    let progval = localStorage.getItem("project")
    let projar = JSON.parse(progval)
    
    
    rosca.onclick = function(){
        window.location.href = "rosca.html"
    }
    machine.onclick = function(){
        window.location.href = "hmchine.html"
    }
    ppage.onclick = function(){
        window.location.href = "webpage.html"
    }

    // for table sort
    sortbydate.onclick = datesort;
    sortbydificult.addEventListener("click",difsort)

    function datesort(){
       
        var  rows, switching, i, x, y, shouldSwitch;
       
        switching = true;
       
        while (switching) {
         
          switching = false;
          rows = table.rows;
         
          for (i = 1; i < (rows.length - 1); i++) {
           
            shouldSwitch = false;
           
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
           
            if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
              
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
           
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      }

      function difsort(){
       
        var  rows, switching, i, x, y, shouldSwitch;
       
        switching = true;
       
        while (switching) {
         
          switching = false;
          rows = table.rows;
         
          for (i = 1; i < (rows.length - 1); i++) {
           
            shouldSwitch = false;
           
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
           
            if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
              
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
           
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      }
      for(let i=0;i<projar.length;i++){
      let projrow = projectlist.insertRow()
      
      let projname = projrow.insertCell(0)
      let projdate = projrow.insertCell(1)
      let projdif = projrow.insertCell(2)

       projname.innerHTML = projar[i].projectname;
       projdate.innerHTML = projar[i].projectdate;
       projdif.innerHTML = projar[i].projectdiscription;
       projrow.style.cursor = "pointer"
     
      projrow.addEventListener("click",()=>{
        window.location.href = `${projar[i].projectlink}`
      })
        
    }

  
  }
