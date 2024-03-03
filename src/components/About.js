import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log('parent did mount...')
    }
    render(){
        console.log('parent render')
        return (
            <div>
            <h1>This is About class component</h1>
            <div>
                LoggedIN User..
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1 className="text-xl font-extrabold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            {/* <User name={"Passing the props in functions"}/> */}
            <UserClass name={"Shubham(Class)"} location={"Ranchi"}/>
        </div>
        )
    }
}

export default About