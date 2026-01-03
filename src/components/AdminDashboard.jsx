import React from "react"
import AddRestaurant from "./AddRestaurant"
import RestaurantList from "./RestaurantList"

function AdminDashboard(){
return(
    <div>
        <AddRestaurant></AddRestaurant>
        <RestaurantList></RestaurantList>
    </div>
)
}
export default AdminDashboard