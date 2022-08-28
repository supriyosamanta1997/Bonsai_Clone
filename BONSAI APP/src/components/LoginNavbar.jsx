import { Navigate, useNavigate } from "react-router-dom"
import styles from "../Styles/loginNavbar.module.css"
export function LoginNavbar()
{
    const Navigate=useNavigate()
    const handleSignUp=()=>{
        Navigate("/signup")
    }
    const handleLogin=()=>{
        Navigate("/login")
    }
    return(
        <div className={styles.Navbar}>
            <div className={styles.Logo}>
                <img src="https://app.hellobonsai.com/assets/logo-icon-6263c52498bd8749917ac337dfcb797432a7d3df25bc04e1a5ce2b0e7451268e.png" width="35" />
            </div>
            <div className={styles.loginSignup}>
                <p style={{fontWeight:500}} onClick={handleLogin} >Login</p>
                <p style={{fontWeight:500}} onClick={handleSignUp}>Sign Up</p>
            </div>
        </div>
    )
}