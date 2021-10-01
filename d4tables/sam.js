let table = document.createElement("table")
document.body.appendChild(table)
let tabel_atri = document.createAttribute("id")
tabel_atri.value = "tab"
table.setAttributeNode(tabel_atri)

let table_head = table.insertRow(0)

let item_names = table_head.insertCell(0)
item_names.style.backgroundColor = "blue";

let item_catagory = table_head.insertCell(1)
item_catagory.style.backgroundColor = "red";

let quantity = table_head.insertCell(2)
quantity.style.backgroundColor = "blue";

let item_rating = table_head.insertCell(3)
item_rating.style.backgroundColor = "yellow"

let item_remove = table_head.insertCell(4)
item_remove.style.backgroundColor = "green"

item_names.innerHTML = "product name"
item_catagory.innerHTML = "product catagory"
quantity.innerHTML = "quantity"
item_rating.innerHTML = "rating"
item_remove.innerHTML = "delete items"


function sam(){
  
  let count = 0

  return function(){
  
  const name = document.getElementById("name")
  const cata = document.getElementById("catagory")
  const quant = document.getElementById("quantity")
  const rate = document.getElementById("rating")
  const get_table = document.getElementById("tab")

  const table_row = get_table.insertRow(++count)
  const table_row_id = document.createAttribute("id")
        table_row_id.value = -1*count
  table_row.setAttributeNode(table_row_id)
   

  const row_data1 = table_row.insertCell(0) 
  const row_data2 =table_row.insertCell(1) 
  const row_data3 =table_row.insertCell(2)
  const row_data4 = table_row.insertCell(3)
  const row_data5 = table_row.insertCell(4)
  

  row_data1.innerHTML  = name.value
  row_data2.innerHTML =cata.value
  row_data3.innerHTML  = quant.value
   row_data4.innerHTML = rate.value
  
   if(!Number(row_data3.innerHTML)){
    
    alert("the value of quantity must be number")
    quant.style.backgroundColor = "red"
    
    document.getElementById(`${-1 *count}`).remove()
    count-=1
    return
   }
  quant.style.backgroundColor = "#FFFFFF"
//console.log( row_data4.innerHTML)
  row_data5.innerHTML=`<button id = ${count} type "button">remove</button>`
  
 
  
document.getElementById(`${count}`).addEventListener("click",() => {
       document.getElementById(`${-1*count}`).remove();
       count-=1
}) 


  }

}

let bubu = sam()

//console.log(document.getElementById("tab").rows[0])

 document.getElementById("sort").addEventListener("click",() => {

   
var table, table_rows, switching, i, x, y, shouldSwitch,byname,byquantity,count
  byname = document.getElementById("sort_name")
  byquantity = document.getElementById("sort_quantity")
  table = document.getElementById("tab");
  switching = true;
  if(byname.checked){ count = 0}
  if(byquantity.checked){count = 2}

  while (switching) {
   
    switching = false;
    table_rows = table.rows;
    
    for (i = 1; i < (table_rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      x = table_rows[i].getElementsByTagName("td")[count];
      y = table_rows[i + 1].getElementsByTagName("td")[count];
      
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      
      table_rows[i].parentNode.insertBefore(table_rows[i + 1], table_rows[i]);
      switching = true;
    }
    //console.log(byname.checked)
  }

  
 })
document.getElementById("filters").addEventListener("click",() =>{

  let tables = document.getElementById("tab")
  
  for(let i = 0;i<tables.rows.length;i++){
    if(tables.rows[i].getElementsByTagName("td")[2].innerHTML <=100 || tables.rows[i].getElementsByTagName("td")[3].innerHTML<4){
      tables.rows[i].remove()
    }
  }
})