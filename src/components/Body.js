import RestaurantCard, {IsPromoted} from "./Restaurant";
import Shimmer from "./Shimmer";
import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Data from "../utils/resData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = ()=>{
    const [listOfRestaurant,setListOfRestaurant] = useState([])  //declaring a state variable---
                                //what ever we pass inside useState() becomes the default variable--
    const [filteredRestaurant,setFilteredRestaurant] = useState([])
    // let listOfRestaurant = "asd" normal js variable---
    const [searchText,setSearchText] = useState("") //state variable of search by text--- input tag--

    const PromotedRestaurant = IsPromoted(RestaurantCard)
    useEffect( ()=>{
        fetchData()
    },[])
    const fetchData = async () => {
    //   const data = await fetch(
    //     // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4441112&lng=78.45032739999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4543976&lng=78.4457084&page_type=DESKTOP_WEB_LISTING"
    //   );
    const data = Data
      const json = data
     console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       //optional chaining-----
       setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       console.log('length is',listOfRestaurant.length)
    }
    let onlineStatus = useOnlineStatus();

    

    if (onlineStatus === false){
        return <h1>Looks Like You Are Offline !! Please Check Your Internet Connection....</h1>
    }

    const {setuserName,loggedInUser} = useContext(UserContext)
    //conditional rendering------
    // if (){<S
        return listOfRestaurant.length === 0?(
            <Shimmer/>
            )  :  (
        <div className='body'>
            <div className='Filter flex'>
            <div className="search m-3 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="px-4 py-2 bg-green-300 m-4 rounded-lg" onClick={()=>{
                    //on click of this button filter the restaurant and update the UI--
                    const filteredRestaurant = listOfRestaurant.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    console.log('this is filtered',filteredRestaurant)
                    setFilteredRestaurant(filteredRestaurant)
                }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button  className="filter-btn px-4 py-2 bg-green-300 rounded-lg" onClick={()=>{
                    const filteredList = listOfRestaurant.filter((res)=> res?.info?.avgRating > 4)
                    setFilteredRestaurant(filteredList)
                }} >Top Rated Restaurant
            </button>
            <div className="m-4 p-4 flex items-center">
                <label>User Name:</label>
                <input className="border border-black p-2" 
                value={loggedInUser}
                onChange={(e)=>setuserName(e.target.value)}/>

            </div>
            </div>
            </div>
            <div className='flex flex-wrap'>
                {filteredRestaurant.map(restaurant => 
                <Link key={restaurant.info.id} to={`restaurants/${restaurant.info.id}`}>
                    {/* {restaurant.info.promoted ? (<PromotedRestaurant resData = {restaurant}/>):( <RestaurantCard  resData = {restaurant}/> )} */}
                    <RestaurantCard  resData = {restaurant}/> 
                    </Link>)
                }
            </div>
        </div>
)
}
export default Body