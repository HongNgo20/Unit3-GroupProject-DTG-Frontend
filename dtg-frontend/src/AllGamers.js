import React, { Component } from 'react';
import SearchGamer from './SearchGamer';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class AllGamers extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        const gamerList = this.props.gamers
        if (gamerList.length) {
            return(
                <React.Fragment>
                    {gamerList.map((gamer, i) => {
                        return(
                            <div key={i} className='gamer'>
                                <a href={'http://localhost:3000/profile/'+gamer._id} ><img src={gamer.profilePic} alt={gamer.name} width='150px'/></a>

                                {/* <Profile profile={gamer} />   */}
                            </div>
                            )
                        })
                    }
                     
                         
                   
                     
                <SearchGamer />
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <p>Tricksy Hobbitses Bug Fix</p>
                    <SearchGamer />
                </React.Fragment>
            )
        } 
    }
}