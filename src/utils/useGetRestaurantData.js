import { useEffect, useState } from "react";
import {MENU_API} from "../utils/constant";

const useGetRestaurantData = (resId) => {
    const [resData, setResData] = useState(null);
    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async() => {
        const res = await fetch(MENU_API+resId);
        const rawResp = await res.json();
        setResData(rawResp);
    }
    return resData;
}

export default useGetRestaurantData;