import Dice from "../dice/dice"
import Player from "../players/player"
import Obstecls from "../obstecls/obstecls"
import Board from "../board/board"
export default function Game(params = {}) {
   return( 
    <div>
   <h1>{params.name}</h1>
   <Dice></Dice>
   <Player name = "player1"></Player>
   <Obstecls name = "Obstecls1"></Obstecls>
   <Board number_of_rows = "110" number_of_columns = "20"></Board>
   </div>
   )
}

;