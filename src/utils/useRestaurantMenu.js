import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    console.log(MENU_API)
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log('use Effect called..')
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json.data)
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;