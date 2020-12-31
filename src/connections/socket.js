import io from 'socket.io-client'

const URL = 'https://chess-game-by-sharatd.herokuapp.com/'

const socket = io(URL)

var mySocketId

socket.on('createNewGame', statusUpdate => {
    console.log("A new game is started! username: " + statusUpdate.userName + ", Game id: " + statusUpdate.gameId + ", Socket id: " + statusUpdate.socketId)
    mySocketId = statusUpdate.mySocketId
})

export {
    socket,
    mySocketId
}