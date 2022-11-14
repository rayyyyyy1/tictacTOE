const gameboard =() => {
    

}
const player =() => {
    let moves=[]
    

}const gameController =() => {

    const checkXorY = () =>{
        
    }
}
const board=document.querySelector('.game-board');
const buttons=document.querySelectorAll('.square');
buttons.forEach(button => {button.addEventListener('click', () =>{
    button.textContent=checkXorY();
})})
const player1 = player();
const player2 = player();

