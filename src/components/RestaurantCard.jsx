import React from "react"
const RestaurantCard=({restaurant,onDelete,onUpdate})=>{
    return(
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <p>{restaurant.type}</p>
            <p>Parking Lot:{restaurant.parkingLot?"Yes":"No"}</p>
            <button onClick={()=>onUpdate(restaurant)}>Update</button>
            <button onClick={()=>onDelete(restaurant.id)}>Delete</button>
        </div>
    )
}
export default RestaurantCard