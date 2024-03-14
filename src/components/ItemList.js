import { useDispatch, useSelector } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem, addResId, addToTotalPrice } from "../utils/cartSlice";

const ItemList = ({items,dummy,resId})=>{
    
    const dispatch = useDispatch();
    console.log(resId)
    const restaurantId = resId
    const currRes = useSelector((store)=> store?.cart?.resId)
    const handleAddItem = (item,restaurantId,currRes)=>{

        //dispatch an action----
        console.log(restaurantId)

        // console.log('ItemPrice =>',item?.card?.info?.price/100)
     

        if (currRes && currRes !== restaurantId){
            console.log('Order from Other Restaurant Already Exists !')
        }else if( currRes && currRes === restaurantId){
            dispatch(addToTotalPrice(item?.card?.info?.price/100))
            dispatch(addItem({Item:item}));
            console.log('Orders Added from same restaurant')
        }
        else{
            dispatch(addToTotalPrice(item?.card?.info?.price/100))
            dispatch(addItem({Item:item}));
            dispatch(addResId(restaurantId));

        }
       
     
    }


    return <div>
        {items?.map(item => <div key={item?.card?.info?.id} className="p-2 m-2 border border-b-2 text-left flex">
          <div className="w-9/12">
          <div className="py-2">
                <span>{item?.card?.info?.name}</span><br/>
                <span>Rs. {item?.card?.info?.price?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
            <div className="absolute">
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={()=> handleAddItem(item,restaurantId,currRes)}>Add+</button>
            </div>
                <img src={CDN_URL + item?.card?.info?.imageId} />
            </div>
        </div>
        )}
    </div>
}

export default ItemList