window.onload = function(){

 let courseselect = document.getElementById("courseselection")
  let coursename = document.getElementById("admincourseinput")
  let coursedate = document.getElementById("coursedateinput")
  let courselink = document.getElementById("courselink")
  let coursediscription = document.getElementById("admincoursedis")
  let addcourse = document.getElementById("courseadd")
  let getcourse = localStorage.getItem("courses")
  let coursearray = JSON.parse(getcourse)
  let courseedit =document.getElementById("admincourseedit")
  let courseremove = document.getElementById("admincourseremove")
  let changecourse = document.getElementById("coursechange")
  //project
  let projectselect = document.getElementById("projectselection")
  let projectname = document.getElementById("adminprojectinput")
  let projectdate = document.getElementById("projectdateinput")
  let dificukt = document.getElementById("projectdifficulty")
  let projectlink = document.getElementById("projectlink")
  let projectdiscription = document.getElementById("adminprojectdis")
  let addproject = document.getElementById("projectadd")
  let projectedit = document.getElementById("adminprojectedit")
  let projremove = document.getElementById("adminprojectemove")
  let changeproject = document.getElementById("projectchange")
  
  //proj caller
  let getproject = localStorage.getItem("project")
  let projectarray = JSON.parse(getproject)
  // user caller
 let result=localStorage.getItem("mass")
     let sam = JSON.parse(result)

     //course caller
     let localcoursestring = localStorage.getItem("courses")
    let localcourse = JSON.parse(localcoursestring)
        
  let userstable = document.getElementById("usertable")
    
  
    //  console.log(sam)
for(let i=0;i<sam.length;i++){
    let newrow=userstable.insertRow()
   let names = newrow.insertCell(0)
   
   let emails = newrow.insertCell(1)
   let pass = newrow.insertCell(2)
   let mess = newrow.insertCell(3)
    names.innerHTML = sam[i].uname;
    emails.innerHTML =sam[i].uemail
    pass.innerHTML = sam[i].uphone
    mess.innerHTML =sam[i].ucom
   
}
//pointer for courses and proj


courseselect.style.cursor = "pointer"
projectselect.style.cursor = "pointer"
//
addcourse.addEventListener("click",addfunc);

function addfunc(){
let obj={
  coursename:coursename.value,
  coursedate:coursedate.value,
  courselink:courselink.value,
  coursediscription:coursediscription.value,
}




coursearray.push(obj)
localStorage.setItem("courses",JSON.stringify(coursearray))
window.onload()

}
addproject.addEventListener("click",projfunc);

function projfunc(){
  let obj = {
    projectname:projectname.value,
    projectdate:projectdate.value,
    dificult:dificukt.value,
    projectlink:projectlink.value,
    projectdiscription:projectdiscription.value
  }
  projectarray.push(obj)
  localStorage.setItem("project",JSON.stringify(projectarray))
  window.onload()
}

for(let i=0;i<coursearray.length;i++){
let options = document.createElement("option")
options.text =` ${localcourse[i].coursename}`
courseselect.add(options)

}
for(let i=0;i< projectarray.length;i++){
  let options = document.createElement("option")
  options.text =` ${projectarray[i].projectname}`
  projectselect.add(options)
  
  }
  ///edit
courseedit.addEventListener("click",curseeditfunc);

function curseeditfunc(){
  let selectedcourse;
  for(let i=0;i<courseselect.children.length;i++){
    if(courseselect.children[i].selected){
      //console.log(courseselect.children[i].innerHTML)
      selectedcourse=courseselect.children[i].innerHTML
      // console.log(selectedcourse)
      // console.log(localcourse[i].coursename)
      coursename.value = localcourse[i].coursename
      coursedate.value = localcourse[i].coursedate
      courselink.value = localcourse[i].courselink
      coursediscription.value = localcourse[i].coursediscription
      changecourse.addEventListener("click",()=>{
        localcourse[i].coursename=coursename.value;
        localcourse[i].coursedate = coursedate.value;
        localcourse[i].courselink=courselink.value;
        localcourse[i].coursediscription =coursediscription.value
        localStorage.setItem("courses",JSON.stringify(localcourse))
        window.onload()
      })
    }
  }
 
      

}
//remove
courseremove.addEventListener("click",removecourse)

  function removecourse(){
    let selectedcourse;
    for(let i=0;i<courseselect.children.length;i++){
      if(courseselect.children[i].selected){
          selectedcourse = courseselect.children[i].innerHTML;
          localcourse.splice(i,1)
          localStorage.setItem("courses",JSON.stringify(localcourse))
          window.onload()
      }
    }

  }
///edit project
projectedit.addEventListener("click",projecteditfunc)
  function projecteditfunc(){
    let selectedproject;
    for(let i=0;i<projectselect.children.length;i++){
      if(projectselect.children[i].selected){
        //console.log(courseselect.children[i].innerHTML)
        selectedproject=projectselect.children[i].innerHTML
        // console.log(selectedcourse)
        // console.log(localcourse[i].coursename)
        projectname.value = projectarray[i]. projectname
        projectdate.value = projectarray[i].projectdate
        projectlink.value = projectarray[i].projectlink
        dificukt.value = projectarray[i].dificult
        projectdiscription.value = projectarray[i].projectdiscription
        changeproject.addEventListener("click",()=>{
           projectarray[i]. projectname= projectname.value
          projectarray[i].projectdate= projectdate.value
          projectarray[i].projectlink=projectlink.value
         projectarray[i].dificult= dificukt.value 
          projectarray[i].projectdiscription=projectdiscription.value
          localStorage.setItem("project",JSON.stringify(projectarray))
          window.onload()
        })
      }
    }
   
        
  
  }
  ///project remove
  projremove.addEventListener("click",removeproject)
  
    function removeproject(){
      let selectedproject;
      for(let i=0;i<projectselect.children.length;i++){
        if(projectselect.children[i].selected){
            selectedproject= projectselect.children[i].innerHTML;
            projectarray.splice(i,1)
            localStorage.setItem("project",JSON.stringify(projectarray))
            window.onload()
        }
      }
  
    }
  

}

    
      

