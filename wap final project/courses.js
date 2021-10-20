window.onload = function(){
    let butn = document.getElementById("coursesort")
    let courselist = document.getElementById("coursetable")
    let wap =document.getElementById("wap")
    let oop = document.getElementById("oop")
    let js = document.getElementById("js")
    //course caller
    let localcoursestring = localStorage.getItem("courses")
    let localcourse = JSON.parse(localcoursestring)
    js.onclick = function js(){
        window.location.href = "js.html"
    }
    wap.onclick = function waps(){
        window.location.href = "wap.html"
    }
    oop.onclick = function oops(){
        window.location.href = "oop.html"
    }
   
   
    butn.addEventListener("click",sorttable);
    function sorttable(){
        
            var  rowse, switching, i, x, y, shouldSwitch;
            table = document.getElementById("myTable");
            switching = true;
            
            while (switching) {
             
              switching = false;
              rowse = courselist.rows;
              
              for (i = 1; i < (rowse.length - 1); i++) {
               
                shouldSwitch = false;
               
                x = rowse[i].getElementsByTagName("TD")[1];
                y = rowse[i + 1].getElementsByTagName("TD")[1];
                console.log(x.innerHTML)
                let first = x.innerHTML.slice(5)
                
                let second =y.innerHTML.slice(5)
               
                    
                  if (first > second) {
                 
                  shouldSwitch = true;
                  break;
                
                }
               
              }
              if (shouldSwitch) {
                
                rowse[i].parentNode.insertBefore(rowse[i + 1], rowse[i]);
                switching = true;
              }
            }
          }
          
          // // for(let i =0;i<courselist.rows.length;i++){

          // //   let firstrow = courselist.rows[i].children[0]
          // //   let secondrow = courselist.rows[i].children[1]
          // //   let obj = {
          // //     firstrow:firstrow.value,
          // //     secondrow:secondrow.value
          // //   }
          //   localcourse.push(obj)
          //   localStorage.setItem("courses",JSON.stringify(localcourse))
            
          // // }
         
          for(let i=0;i<localcourse.length;i++){
             let courserow = courselist.insertRow()
          let coursenamescell = courserow.insertCell(0)
          let coursedatecell = courserow.insertCell(1)
          courserow.style.cursor = "pointer"
            coursenamescell.innerHTML =localcourse[i].coursename
            coursedatecell.innerHTML = localcourse[i].coursedate 
            courserow.addEventListener("click",()=>{
              window.location.href =`${localcourse[i].courselink}`

            })
          }


}
