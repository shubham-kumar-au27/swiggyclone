import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = ()=>{
    // let btnName = "login";


    let [btnNameReact,setBtnNameReact] = useState("Login")
    
    const onlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext);


    //Subscribing to the store  using a selector----
    const cartItems = useSelector((store) => store.cart.items)

  
    return(
        <div className='flex justify-between shadow-lg bg-pink-100 h-32'>
            <div className='logo-container'>
                <img className='w-10 h-10' src={LOGO_URL}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                <li className="px-4">
                    online status: {onlineStatus ? '🟢' : '🔴' }
                </li>
                <li className="px-4"><Link to="/">Home</Link> 
                </li>
                <li className="px-4">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">ContactUs</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 font-bold">
                <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                </li>
                <button onClick={()=>{

                    btnNameReact === 'Login'? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    console.log(btnNameReact)
                }} className="login">
                    {btnNameReact}</button>
                <li className="px-4 font-extrabold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header