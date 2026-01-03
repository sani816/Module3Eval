import { useContext, useState } from "react"
import { RestaurantContext } from "../context/RestaurantContext"

const AddRestaurant=()=>{
    const {addRestaurant}=useContext(RestaurantContext)
    const[name,setName]=useState("")
    const[address,setAddress]=useState("")
    const [type,setType]=useState("")
    const[parkingLot,setParkingLot]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newRestaurant={
            id:Date.now(),
            name,
            address,
            type,
            parkingLot
        }
        addRestaurant(newRestaurant)
        setName("")
        setAddress("")
        setType("")
        setParkingLot("")
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
             <button type="submit">Add Restaurant</button>
        </form>
    )
}
export default AddRestaurant