import { Routes,Route} from "react-router-dom"
import { LandingPage } from "../components/LandingPage"
import { UserAuthContextProvider } from "../context/Authcontext"
import { Checkout } from "./checkout"
import { Login } from "./Login"
import ProtectcedRouter from "./ProtectedRoute"
import { Review } from "./Review"
import { Signup } from "./signup"
export function AllRoute()
{
    return(
        
    <UserAuthContextProvider>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/review' element={
               
            <Review/>
            
            }/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/checkout' element={
            
                <Checkout/>
            }/>
        </Routes>
    </UserAuthContextProvider>   
    )
}