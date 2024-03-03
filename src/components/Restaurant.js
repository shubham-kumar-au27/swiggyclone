import { useContext } from "react"
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props)=>{
    const {resData} = props
    const {loggedInUser} = useContext(UserContext)
    const {cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    } = resData?.info
    return (
        <div className='m-4 p-4 w-[260px] rounded-lg bg-gray-100 hover:bg-orange-300 overflow-hidden'>
            <img alt='res-logo' className='res-img rounded-lg' src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <p className="text-xs">{cuisines.join(',')}</p>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            {/* <h4>user:{loggedInUser}</h4> */}
        </div>
        
    )

}
export const IsPromoted = (RestaurantCard)=>{
    return (props)=>{
        return (
            <>
            <label className="absolute bg-black text-white">Promoted</label>
            <RestaurantCard {...props}/>
            </>
        )
    }
    
}
export default RestaurantCard
