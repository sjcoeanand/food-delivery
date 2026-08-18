const RestaurantCard = (props) => {
  const {resData} = props;
 
  return (
    <div className='res-card'>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId} alt={"text"+resData.name} className='res-thumbnil'/>
      <h3>{resData.name}</h3>
      <div className='cuisines'>
        {resData.cuisines.join(", ")}
      </div>
      <div className='price'>{resData.costForTwo}</div>
      <div className='ratings'>{resData.avgRating} stars</div>
      <div className='delivery-time'>{resData.sla.slaString} minutes</div>
    </div>
  )
}

export default RestaurantCard;