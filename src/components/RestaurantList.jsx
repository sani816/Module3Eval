import { useContext } from "react"
import { RestaurantContext } from "../context/RestaurantContext"
import RestaurantCard from "./RestaurantCard"

const RestaurantList=()=>{
    const{restaurants,deleteRestaurant}=useContext(RestaurantContext)

    return(
        <div>
            {restaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.id}
                restaurant={restaurant}
                onDelete={deleteRestaurant}
                onUpdate={(restaurant)=>console.log("update",restaurant)}>
                </RestaurantCard>
            ))}
        </div>
    )
}
export default RestaurantList