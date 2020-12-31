import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import JoinRoom from './onboard/joinroom'
import { Context } from './context/context'
import Onboard from './onboard/onboard'
import JoinGame from './onboard/joingame'
import ChessGame from './chess/ui/chessgame'

/**
 * Frontend flow:
 * 
 * 1. user first opens app in browser 
 * 2. user is asked to send game URL to friend to start
 * 3. user sends game URL to friend
 * 4. user clicks 'start' button and waits for other player
 * 5. Game starts once other player joins
 * 
 * Other player:
 * 1. user gets link sent by friend
 * 2. user clicks on link which redirects to their game. If 'host' hasn't 
 * clicked 'start' yet, user waits till it's clicked.
 * If host leaves before start, user is notified that host has left.
 * 3. Once host clicks start or start was clicked before, game starts
 * Onboarding screen =======> Game start
 * 
 * Every time user opens site through '/' path, new game instance is created on 
 * the back-end. Therefore, generate uuid on frontend and send request with uuid as part 
 * of request. If any player leaves, other player wins. 
 */

 function App(){

    const [didRedirect, setDidRedirect] = React.useState(false)

    const playerDidRedirect = React.useCallback(() => {
        setDidRedirect(true)
    }, [])

    const playerDidNotRedirect = React.useCallback(() => {
        setDidRedirect(false)
    }, [])

    const [userName, setUserName] = React.useState('')

    return (
        <Context.Provider value = {{didRedirect: didRedirect, playerDidRedirect: playerDidRedirect, playerDidNotRedirect: playerDidNotRedirect}}>
           <Router>
            <Switch>
                <Route path = "/" exact>
                    <Onboard setUserName = {setUserName}/>      
                </Route>    
                <Route path = "/game/:gameid" exact>
                    {didRedirect ?
                    <React.Fragment>
                        <JoinGame userName = {userName} isCreator = {true} />
                        <ChessGame myUserName = {userName} />
                    </React.Fragment>
                    :
                    <JoinRoom/>}
                </Route>
                <Redirect to = "/" />
            </Switch>    
           </Router> 
        </Context.Provider>);
    
 }

 export default App;
 