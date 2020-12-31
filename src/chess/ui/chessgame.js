import React from 'react'
import { Socket } from 'socket.io-client'
import Game from '../model/chess'

class ChessGame extends React.Component {
    state = {
        gameState: new Game(this.props.isWhite),
        whiteKingInCheck: false,
        blackKingInCheck: false
    }

    componentDidMount(){
        //need to register event listeners for socket.io
        Socket.on('opponent move', move => {
            if (move.playerColorThatJustMovedIsWhite !== this.props.isWhite){
                this.movePiece(move.selectedId, move.finalPosition, this.state.gameState, false)
                this.setState({
                    playerTurnToMoveIsWhite: !move.playerColorThatJustMovedIsWhite
                })
            }
        })
    }

    render(){
        return (
            /**
             * <div background = chessboard>
             * <stage>
             *  <layer for loop model and renders it>
             * <div>
             */
            <React.Fragment>
                <div>
                    <Stage>
                        <Layer>
                            {
                                this.state.gameState.getBoard().map((row) =>{
                                   return (
                                       <React.Fragment>
                                           {
                                               row.map((square) => {
                                                   return(
                                                       <Piece
                                                            x = {square.getBoardCoord()[0]}
                                                            y = {square.getBoardCoord()[1]}
                                                            imgUrls = {piecemap[square.getPiece().name]}
                                                            isWhite = {square.getPiece().name == "white"}
                                                        
                                                        
                                                        >

                                                       </Piece>
                                                   )
                                            
                                                   
                                               })
                                           }
                                       </React.Fragment>
                                   )
                                
                                    
                                })
                            }
                        </Layer>
                    </Stage>

                </div>
            </React.Fragment>
        )
    }

    movePiece(selectedId, finalPosition, currentGame, isMyMove){
        /**
         * uses pythagorean theorem to calculate distance between final pos.
         * of chess piece and every square on board and assigns piece to 
         * closest square 
         */
    }
}

export default ChessGame 