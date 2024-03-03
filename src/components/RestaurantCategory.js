import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data,showItems,setShowIndex,dummy})=>{

    
    const handleclick = ()=>{
        setShowIndex()
    

    }
    return <div>
        {/* {Header} */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleclick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
              
                   {/* {Accordian Body} */}
             { showItems && <ItemList items = {data.itemCards} dummy={dummy}/>}
            </div>
     

    </div>
}

export default RestaurantCategory