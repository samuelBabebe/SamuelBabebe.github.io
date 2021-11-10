window.onload =function(){
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(result =>{
        let sam =result.results
        //console.log(sam)
        //let sami =""
        //let kiya=""
       for(let i=0;i<5;i++){
        let kiya=`<img id="sil" src="${sam[i].picture.large}">`
         let sami=`<h4>${sam[i].name.first} ${sam[i].name.last}</h4>
         <p>${sam[i].phone}
         <p>${sam[i].email}</p>`
        
         let lol = document.createElement("div")
         let ids = document.createAttribute("id")
         lol.className = "all"
        
         ids.value = "container"
         document.body.appendChild(lol)
         lol.setAttributeNode(ids)
      
        
         let pics = document.createElement("Div")
         let picsid = document.createAttribute( "id")
         
         picsid.value = "pic"
         pics.setAttributeNode(picsid) 
         pics.innerHTML=sami
         lol.appendChild(pics)
     
         let were = document.createElement("div");
         let wereids = document.createAttribute("id")
         wereids.value = "other"
         were.innerHTML=kiya
         were.setAttributeNode(wereids)
         lol.appendChild(were)
     

    //     document.getElementById("pic").innerHTML=kiya
    //    document.getElementById("other").innerHTML =sami
         
       }
      
       
        
    })
  
    
    document.getElementById("refresh").addEventListener("click",()=>{
       
    
        fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json())
        .then(result =>{
            let sam =result.results
            
            let my =document.getElementsByClassName("all")
            for(let i =my.length-1;i>=0;i--){
               my[i].remove()
            }
          
           for(let i=0;i<5;i++){
            let kiya=`<img id="sil" src="${sam[i].picture.large}">`
             let sami=`<h4>${sam[i].name.first} ${sam[i].name.last}</h4>
             <p>${sam[i].phone}
             <p>${sam[i].email}</p>`
            
             let lol = document.createElement("div")
         let ids = document.createAttribute("id")
         lol.className = "all"
        
         ids.value = "container"
         document.body.appendChild(lol)
         lol.setAttributeNode(ids)
      
        
         let pics = document.createElement("Div")
         let picsid = document.createAttribute( "id")
         
         picsid.value = "pic"
         pics.setAttributeNode(picsid) 
         pics.innerHTML=sami
         lol.appendChild(pics)
     
         let were = document.createElement("div");
         let wereids = document.createAttribute("id")
         wereids.value = "other"
         were.innerHTML=kiya
         were.setAttributeNode(wereids)
         lol.appendChild(were)
     

    
         
       }
      
       
        
    })

       
             
           
          
           
            
        })

    
        
}