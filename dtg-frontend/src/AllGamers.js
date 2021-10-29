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
        const gamerList = this.props.users
        console.log(gamerList)

        if (gamerList.length) {
            return(
                <React.Fragment>
                    {gamerList.map((user, i) => {
                        return(
                            <div key={i} className='gamer'>
                                <a href={'http://localhost:3000/profile/'+user._id} ><img src={user.profilePic} alt={user.name} width='150px'/></a>
                                <br/>
                                {user.username}
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