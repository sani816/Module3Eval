import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import CustomerDashboard from "./components/CustomerDashboard";
import Login from "./Login";
import AdminDashboard from "./components/AdminDashboard";
import { RestaurantProvider } from "./context/RestaurantContext";

const App=()=>{
    return(
        <RestaurantProvider>
       <Router>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
             <Route path="/admin" element={<AdminDashboard/>}></Route>
              <Route path="/customer" element={<CustomerDashboard/>}></Route>

        </Routes>
       </Router>
       </RestaurantProvider>
    )
}
export default App;