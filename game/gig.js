let Pic_Div = document.getElementById('pic');
let paper_id = document.getElementById('p');
let rock_id = document.getElementById('r');
let sissor_id = document.getElementById('s');
let user_score= document.getElementById('humscore');
let comp_score= document.getElementById('compscore');
let result_teller = document.getElementById('resultteler')
paper_id.addEventListener('click', function () {
   game('papper')
   

})
rock_id.addEventListener('click', function () {
    game('rock')
    
 
 })
 sissor_id.addEventListener('click', function () {
    game('sissor')
    
 
 })

function game(userchoice){
    
    let fuck =computer();
    switch( userchoice + fuck){
        case "sissorpapper":
        case "rocksissor":
        case "papperrock":
            win(userchoice,fuck);
            break;
        case "sissorsissor":
        case "papperpapper":
        case "rockrock":
            draw(userchoice,fuck);
            break;
        case "pappersissor":
        case "sissorrock":
        case "rockpapper":
            lose(userchoice,fuck);
            break;
    }
    
    }

function computer(){
    let choose = ['papper','sissor','rock'];
    let find= Math.floor(Math.random()*3);
    return choose[find];
}
function win(userchoice,fuck){
    user_score.innerHTML++
    
    result_teller.innerHTML = `user choose  ${userchoice}  comp choose 
    ${fuck}  you win`
    

}
function lose(userchoice,fuck){
    comp_score.innerHTML++
    
    result_teller.innerHTML =  `user choose  ${userchoice}  comp choose 
    ${fuck}  you loose`

}
function draw(userchoice,fuck){

    result_teller.innerHTML =  `user choose  ${userchoice}  comp choose 
    ${fuck}  draw`

}

