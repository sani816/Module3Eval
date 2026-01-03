import { createContext, useState, useEffect } from "react";

const RestaurantContext=createContext()
const RestaurantProvider=({children})=>{
    const[restaurants,setRestaurants]=useState([])
    const[filteredRestaurants,setFilteredRestaurants]=useState([])
    useEffect(()=>{
        const storedRestaurants=JSON.parse(localStorage.getItem("restaurants"))||[]
        setRestaurants(storedRestaurants)
        setFilteredRestaurants(storedRestaurants)
    },[])

    const addRestaurant=(restaurant)=>{
        const updateRestaurants=[...restaurants,restaurant]
        setRestaurants(updateRestaurants)
        setFilteredRestaurants(updateRestaurants)
        localStorage.setItem("restaurants",JSON.stringify(updateRestaurants))
    }

    const updateRestaurant=(updateRestaurant)=>{
        const updateRestaurants=restaurants.map((r)=>(r.id===updateRestaurant.id?updateRestaurant:r))
        setRestaurants(updateRestaurants)
        setFilteredRestaurants(updateRestaurants)
        localStorage.setItem("restaurants",JSON.stringify(updateRestaurants))
    }

    const deleteRestaurant=(id)=>{
        const updateRestaurants=restaurants.filter((r)=>r.id!==id)
        setRestaurants(updateRestaurants)
        setFilteredRestaurants(updateRestaurants)
         localStorage.setItem("restaurants",JSON.stringify(updateRestaurants))
    }

    const filterRestaurants=(type,parking)=>{
        let filtered=restaurants
        if(type){
            filtered=filtered.filter((r)=>r.type===type)
        }
        if(parking){
            filtered=filtered.filter((r)=>r.parkingLot===parking)
        }
        setFilteredRestaurants(filtered)
    }


    return(
        <RestaurantContext.Provider value={{restaurants:filteredRestaurants,addRestaurant,updateRestaurant,filterRestaurants}}>{children}</RestaurantContext.Provider>
    )
}
export{RestaurantProvider,RestaurantContext}