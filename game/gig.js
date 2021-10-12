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
    
    let lol =computer();
    switch( userchoice + lol){
        case "sissorpapper":
        case "rocksissor":
        case "papperrock":
            win(userchoice,lol);
            break;
        case "sissorsissor":
        case "papperpapper":
        case "rockrock":
            draw(userchoice,lol);
            break;
        case "pappersissor":
        case "sissorrock":
        case "rockpapper":
            lose(userchoice,lol);
            break;
    }
    
    }

function computer(){
    let choose = ['papper','sissor','rock'];
    let find= Math.floor(Math.random()*3);
    return choose[find];
}
function win(userchoice,lol){
    user_score.innerHTML++
    
    result_teller.innerHTML = `user choose  ${userchoice}  comp choose 
    ${lol}  you win`
    

}
function lose(userchoice,lol){
    comp_score.innerHTML++
    
    result_teller.innerHTML =  `<sup>user<sup> choose  ${userchoice}  <sup>comp<sup> choose 
    ${lol}  you loose`

}
function draw(userchoice,lol){

    result_teller.innerHTML =  `<sup>user<sup> choose  ${userchoice}  <sup>comp<sup> choose 
    ${lol}  draw`

}

