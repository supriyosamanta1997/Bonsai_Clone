import { LoginContent } from "../components/LoginContent";
import { LoginNavbar } from "../components/LoginNavbar";


export function Login(){
    return (
        <div>
            <LoginNavbar/>
            <div>
            <LoginContent/>
            </div>
            <div style={{
                            height:"100px",
                            width:"100%",
                            marginTop:"10%"
                            }}></div>  
                
        </div>
    )
}