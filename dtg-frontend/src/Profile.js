import React, { Component } from 'react';
import './App.css';
import Comments from './Comments';
import HeartButton from './HeartButton';
import { useParams } from "react-router-dom";
// import StarRating from './StarRating';

export default function Profile(props) {
   
   
      console.log(props)
      

      
      let { id } = useParams();
      const profileData = props.profiles.find(profile => profile._id === id)
      
      if (profileData) {
        return(
            <React.Fragment>
              <HeartButton />
              {/* <StarRating /> */}
                <h1>Profile Info</h1>
                  <img 
                    
                    src={profileData.profilePic} 
                    alt={profileData.name} 
                    width='150px' /><br />
                  
                  Name: {profileData.name}<br />

                  <br />
              <Comments
                commentsUrl="http://localhost:3000/comments"
                currentUserId="1" />
            </React.Fragment>
          )
      } else {
        return(
          <React.Fragment>
          </React.Fragment>)
    }       
  }

