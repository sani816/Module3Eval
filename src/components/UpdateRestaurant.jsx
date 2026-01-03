import { useContext, useState } from "react"
import { RestaurantContext } from "../context/RestaurantContext"

const UpdateRestaurant=({restaurant,onUpdate})=>{
    const {updateRestaurant}=useContext(RestaurantContext)
    const[name,setName]=useState(restaurant.name)
    const [address,setAddress]=useState(restaurant.address)
    const [type,setType]=useState(restaurant.type)
    const[parkingLot,setParkingLot]=useState(restaurant.parkingLot)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const updateRestaurant={
            ...restaurant,
            name,
            address,
            type,
            parkingLot
        }

         return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name"></input>
             <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="enter adsress"></input>
             <select value={type} onChange={(e)=>setType(e.target.value)}>
                <option value="">Select type</option>
                <option value="italian">italian</option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Indian</option>
             </select>
             <label>
                Parking Lot:
                <input type="checkbox" checked={parkingLot} onChange={(e)=>setParkingLot(e.target.checked)}></input>
             </label>
             <button type="submit">Update Restaurant</button>
        </form>
    )
    }
  
}
  export default UpdateRestaurant