import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //creating state variable in class----
        //state getting created---
        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Default Location",
            }
        }
   
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shubham-kumar-au27")
        const json = await data.json();
        //state getting updated with data-----
        this.setState({
            userInfo:json
        })
        console.log(json)
        
    }
    render(){
        const {name,location,avatar_url} = this.state.userInfo;


       
        return (
            <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h3></h3>
            </div>
        )
    }

}
export default UserClass


//Mounting-----
// constructor(dummy)
// render(dummy)
//  <html dummy>
// component did mounted
// <APICALL>
//     this.setstate -> state variable--- is updated--

// -- update---
// render api data
// <html with new api data>





