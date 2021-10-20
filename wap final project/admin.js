window.onload = function(){
    let log = document.getElementById("adminlog")
    let adminemail = document.getElementById("adminemail")
    let adminpass= document.getElementById("adminpassword")
    let warning = document.getElementById("warning")

    log.addEventListener("click",adminlogin);

    function adminlogin(){

        let Aemail = "sa@gmail.com"
        let Apass =  "123"
        if(adminemail.value ===Aemail && adminpass.value===Apass){

            window.location.href = "dashbord.html"
        }else{
            warning.style.visibility = "visible"
        }
    }
}