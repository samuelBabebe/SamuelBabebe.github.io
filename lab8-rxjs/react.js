const{fromEvent,from}=rxjs;
const{mergeMap,reduce,map} = rxjs.operators;
let elmnt = document.getElementById("search")
let input = document.getElementById("input")
const search = fromEvent(elmnt,"click")
//let elil;
const bizat = fromEvent(input,"input")
 bizat.subscribe(val=>{let elil ="https://randomuser.me/api/?results="+val.target.value;
        if(elil&&search){
            let fetchs=from(fetch(elil).then(response=>response.json()))
             search.pipe(
                 mergeMap(val=>fetchs)).subscribe(lol =>{
                        let kit= lol.results;
                        let kiya="";
                        //let sami="";
                    
                        from(kit).subscribe(sam=> kiya+=`<img id="sil" src="${sam.picture.large}">
                          
                        <h4>${sam.name.first} ${sam.name.last}</h4>
                           <p>${sam.phone}
                           <p>${sam.email}</p>`
                           )
                        
                        
                        document.getElementById("pic").innerHTML =kiya})
        }
})