import { Alert, AlertIcon } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { ToastExample } from "../components/toast";
import { useUserAuth } from "../context/Authcontext"

const ProtectcedRouter=({children})=>{
    let {user}=useUserAuth();
    if(user)
    {
        return (
        <>
        <Navigate to="/review"/>
  
        </>
        )
        
    }
    else{
        return(
            <Navigate to="/login"/>
        )
    }
    return children;
}
export default ProtectcedRouter;