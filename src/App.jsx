import AddRestaurant from "./components/AddRestaurant"
import RestaurantList from "./components/RestaurantList";
import { RestaurantProvider } from "./context/RestaurantContext"

const App=()=>{
    return(
        <RestaurantProvider>
            <div>
                <h1>Restaurant Management App</h1>
                <AddRestaurant></AddRestaurant>
                <RestaurantList></RestaurantList>
            </div>
        </RestaurantProvider>
    )
}
export default App;