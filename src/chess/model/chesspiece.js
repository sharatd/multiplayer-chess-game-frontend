class ChessPiece {
    constructor(name, id, isAttacked, color){
        this.name = name //string
        this.color = color // string (white or black)
        this.id = id // string
        this.isAttacked = isAttacked // boolean
    }

    setSquare(newSquare){
        //assign this piece to a specific square 
        //this.square = square
        if (newSquare === undefined){
            this.squareThisPieceIsOn = newSquare 
            return
        }

        if (this.squareThisPieceIsOn === undefined){
            this.squareThisPieceIsOn = newSquare 
            newSquare.setPiece(this)
        }

        const isNewSquareDifferent = this.squareThisPieceIsOn.x !== newSquare.x || this.squareThisPieceIsOn.y !== newSquare.y
        if (isNewSquareDifferent){
            this.squareThisPieceIsOn = newSquare
            newSquare.setPiece(this)
        }
    
    }

    getSquare(){
        //get the current square of peice 
        //unefined if piece not on board 
        return this.squareThisPieceIsOn
    }

  
}

export default ChessPiece