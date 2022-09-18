import React, { Component } from 'react'
import { Players } from '../shared/ListOfPlayers';
import PlayersPresentation from './PlayersPresentation';

export  class Main extends Component {
    constructor(){
        super();
            this.state = {
                playerp : Players
            };
    }
    render(){
         return<PlayersPresentation playerp = {this.state.playerp}/>        
    }
}
export default Main
