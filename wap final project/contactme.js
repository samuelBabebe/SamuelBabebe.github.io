window.onload = function(){
    
let newarr = localStorage.getItem("mass")
let mass = JSON.parse(newarr)
let uname = document.getElementById("username")
let uemail = document.getElementById("useremail")
let uphone = document.getElementById("userphone")
let ucom = document.getElementById("usermessage")
let sumit = document.getElementById("submit")


sumit.addEventListener("click",valuepush);

function valuepush(){
    let obj = {
        uname:uname.value,
        uemail:uemail.value,
        uphone:uphone.value,
        ucom:ucom.value
    }
    mass.push(obj)
   
    
    localStorage.setItem("mass",JSON.stringify(mass))
   
}


}