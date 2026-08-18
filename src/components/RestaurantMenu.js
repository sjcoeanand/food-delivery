
import { useParams } from 'react-router-dom';
import useGetRestaurantData from '../utils/useGetRestaurantData';

const RestaurantMenu = () => {
    // const [resData, setResData]=useState(null);
    console.log(useParams())
    const {resId} = useParams();

    const resData = useGetRestaurantData(resId);
    console.log("resData ", resData)
   

    if(resData === null) {
        return (<div>Fetching Data</div>)
    } 
    
    const {name, cuisines} = resData?.data?.cards[2]?.card?.card?.info;
    const menuItems = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards;
    
    return (<div className="menu">
        <h1>{name}</h1>
        <h2>Cuisins : {cuisines.join(", ")}</h2>
        <ul>
            {
                menuItems?.map(x=>{                 
                    return <li key={x.card.info.id}>{x.card.info.name} - Rs.{x.card.info.price}</li>
                })
            }    
        </ul>
    </div>);
}

export default RestaurantMenu;