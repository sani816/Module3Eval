import React from "react";
import { useState } from "react";
import RestaurantList from "./RestaurantList";

function CustomerDashboard(){
    const[search,setSearch]=useState("")
    return(
        <div>
            <h2>Customer dashboard</h2>
            <input type="text" placeholder="search resturant" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            <RestaurantList search={search}></RestaurantList>
        </div>
    )
}
export default CustomerDashboard;