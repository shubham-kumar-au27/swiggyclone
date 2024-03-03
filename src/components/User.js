import React, { useState } from "react";

// class About extends React.Component{
//     render(){
//         // return(

            
//         // )
//     }
// }
const User = (pro) =>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return <div className="user-card">
            <h1>COUNT :{count}</h1>
            <h1>COUNT :{count2}</h1>
            <h2>Name:Shubham {pro.name}</h2>
            <h3>Location: Ranchi</h3>
        </div>
}


export default User