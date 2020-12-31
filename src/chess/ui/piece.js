import React from 'react'

const Piece = (props) => {
    /**
     * imageUrl
     * color
     * id
     * color of player
     * whether or not it's your turn
     * if it's this player's turn, color of player is same 
     * as color of this piece 
     * then we can make this piece draggable or moveable
     */
    const choiceofColor = props.isWhite ? 0:1
    const[image] = useImage(props.imgUrls[choiceofColor])
    const isDragged = props.id === props.draggedPieceTargetId
    const canPieceBeMoved = props.isWhite === props.thisPlayerIsWhite
    const isPlayerTurn = props.playerTurnToMoveIsWhite === props.thisPlayerIsWhite
    const thisWhiteKingInCheck = props.id === 'wk1' && props.thisWhiteKingInCheck
    const thisBlackKingInCheck = props.id 
    
    return (
        <Image 
            draggable
        />
    )
}

export default Piece 