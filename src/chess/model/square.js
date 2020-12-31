class Square {
    constructor(x, y, boardCoordinates, pieceOnThisSquare){
        this.x = x
        this.y = y
        this.boardCoordinates = boardCoordinates 
        this.pieceOnThisSquare = pieceOnThisSquare // ChessPiece || null
    }

    setPiece(newPiece){
        if (newPiece === null && this.pieceOnThisSquare === null){
            return
        }   else if (newPiece === null) {
            // case where caller wants to remove piece on square
            this.pieceOnThisSquare.setSquare(undefined)
            this.pieceOnThisSquare = null
        } else if (this.pieceOnThisSquare === null){
            // case in which caller wants to assign new piece to square
            this.pieceOnThisSquare = newPiece
            newPiece.setSquare(this)
        } else if (this.getPieceIdOnThisSquare() !== newPiece.id && this.pieceOnThisSquare.color !== newPiece.color){
            // case where piece on square changes after being captured
            console.log("capture!")
            this.pieceOnThisSquare = newPiece
            newPiece.setSquare(this)
        } else{
            return "user attempted to capture own piece"
        }
    }

    removePiece(){
        this.pieceOnThisSquare = null
    }

    getPiece(){
        return this.pieceOnThisSquare
    }

    getPieceIdOnThisSquare(){
        if (this.pieceOnThisSquare === null){
            return "empty"
        }
        return this.pieceOnThisSquare.id
    }

    isOccupied(){
        return this.pieceOnThisSquare != null
    }

    getCoord(){
        return [this.x, this.y]
    }

    getBoardCoord(){
        return this.boardCoordinates
    }
}

export default Square