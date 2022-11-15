const gameboard =(() => {
    const board=['','','','','','','','',''];
    return {board};
})();
const player = (name,symbol) =>{
    const game_picks=[];
    return {name,symbol, game_picks};
}
const player1 = player('Player1','X');
const player2 = player('Player2','O');



const gameController =(() => {
    const {board}=gameboard;
    let winner = document.querySelector('.winnerMsg')
    const buttons = document.querySelectorAll('.square')
    function event(){
        buttons.forEach(button => {
            button.addEventListener('click', markSpot)
        })
   }
   let turn=true;
    function markSpot(e){
        const locArray = board[`${e.target.id}`];
         if(locArray == ''){
            if(turn==true){
                player1.game_picks.push(`${e.target.id}`);
                //console.log(player1.game_picks);
                board[`${e.target.id}`]=player1.symbol;
                //console.log(board);
                document.getElementById(`${e.target.id}`).textContent=player1.symbol;
                turn=!turn; 
            }
            else{
                player2.game_picks.push(`${e.target.id}`);
               // console.log(player2.game_picks);
                board[`${e.target.id}`]=player2.symbol;
               // console.log(board);
                document.getElementById(`${e.target.id}`).textContent=player2.symbol;
                turn=!turn;     
            }
         }
         checkWin();
   }
   function checkWin(){
    if(board[0]==board[1] && board[0]==board[2]&& board[0]!='')
        {if(board[0]=='X')
            winner.textContent=`${player1.name} WINS`
            else winner.textContent=`${player2.name} WINS`
        removeClick(); }
    if(board[3]==board[4] && board[3]==board[5]&& board[3]!='')
        {if(board[3]=='X')
            winner.textContent=`${player1.name} WINS`
            else winner.textContent=`${player2.name} WINS`
            removeClick(); }
    if(board[6]==board[7] && board[6]==board[8]&& board[6]!='')
         {if(board[6]=='X')
            winner.textContent=`${player1.name} WINS`
            else winner.textContent=`${player2.name} WINS`
        removeClick();} 
    if(board[0]==board[4] && board[0]==board[8]&& board[0]!='')
        {if(board[0]=='X')
         winner.textContent=`${player1.name} WINS`
            else winner.textContent=`${player2.name} WINS`
        removeClick(); }
    if(board[2]==board[4] && board[2]==board[6]&& board[2]!='')
         {if(board[2]=='X')
            winner.textContent=`${player1.name} WINS`
                else winner.textContent=`${player2.name} WINS` 
        removeClick();}
    if(board[0]!=''&&board[1]!=''&&board[2]!=''&&board[3]!=''&&board[4]!=''&&board[5]!=''&&board[6]!=''&&board[7]!=''&&board[8]!=''){
        winner.textContent='TIE'
        removeClick();
    }
   }   
   function removeClick(){
        buttons.forEach(button =>{
            button.removeEventListener('click',markSpot);
        })
   }
   function doit() {document.querySelector('.reset-game').addEventListener('click',resetBoard)}
   function createPlayer(){
      
   }
   function resetBoard(){
       buttons.forEach(button =>{
        button.textContent='';
        for(let i=0;i<9;i++){
            board[i]='';
        }
       })
       winner.textContent=''
       turn=true;
       event();

    }
    doit();
    event();
   return {event};
})();

