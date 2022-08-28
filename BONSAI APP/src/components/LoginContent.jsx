
import { FcGoogle } from "react-icons/fc"
import { Button, Link, Tag, Text } from "@chakra-ui/react"
import styles from "../Styles/loginContent.module.css"
import { Input } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/Authcontext"
import { useState } from "react"
import {
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'


export function LoginContent()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const { LogIn,GooglesignIn }=useUserAuth();
    const Navigate=useNavigate();
    const handleGoogle= async (e)=>
    {
        e.preventDefault();
        try{
            await GooglesignIn();
            Navigate("/")
        }
        catch(err)
        {
            setError(error.message)
        }
    };
    
       
    
    const handleSubmit= async (event)=>{
        event.preventDefault();
        setError("")
        try{
            await LogIn(email,password);
           Navigate("/")
        }
        catch(err)
        {
            setError(err.message)
           
        }
    };
    return(
        <div className={styles.content}>
            <div className={styles.details}>
                <div className={styles.header}>The Changelog</div>
                <div className={styles.main}>
                    <div className={styles.main1}>
                    <Text>
                    <Tag style={{marginRight:"5px"}} bg='#00b289'  color='#fff' borderRadius='full'> New</Tag>
                    <Link style={{fontWeight:"500"}} color='teal.1000' href='#'>
                        A new clintform experience.
                    </Link>
                        you can create clint forms and servays, no matter which plan you are on.The forms also...{' '}
                    </Text>
                    </div>
                    <div className={styles.main1}>
                    <Text>
                    <Tag style={{marginRight:"5px"}} bg='#00b289'  color='#fff' borderRadius='full'> New</Tag>
                    <Link style={{fontWeight:"500"}} color='teal.1000' href='#'>
                        A new clintform experience.
                    </Link>
                        you can create clint forms and servays, no matter which plan you are on.The forms also...{' '}
                    </Text>
                    </div>
                    <div className={styles.main1}>
                    <Text>
                    <Tag style={{marginRight:"5px"}} bg='#00b289'  color='#fff' borderRadius='full'> New</Tag>
                    <Link style={{fontWeight:"500"}} color='teal.1000' href='#'>
                        A new clintform experience.
                    </Link>
                        you can create clint forms and servays, no matter which plan you are on.The forms also...{' '}
                    </Text>
                    </div>
                    <div className={styles.main1}>
                    <Text>
                    <Tag style={{marginRight:"5px",fontWeight:"lighter",fontSize:"12px"}} borderRadius='full'>Improvement</Tag>
                    <Link style={{fontWeight:"500"}} color='teal.1000' href='#'>
                        Drag and drop items on your invoices.
                    </Link>
                       {' '}
                    </Text>
                    </div>
                    <div className={styles.main1}>
                    <Text>
                    <Tag style={{marginRight:"5px",fontWeight:"lighter",fontSize:"12px"}} borderRadius='full'>Improvement</Tag>
                    <Link style={{fontWeight:"500"}} color='teal.1000' href='#'>
                        Updated Integration page.
                    </Link>
                       Discover all the ways you can connect Bonsai to your workflow to your new integration page...{' '}
                    </Text>
                    </div>
                </div>
                <div className={styles.footer}>
                <Text style={{color:"#00b289",fontSize:'12px'}}>
                    <Link style={{fontWeight:"400"}} color='teal.500' href='#'>
                        Bonsai Updates{' '}
                    </Link>
                       powered by{' '}
                       <Link style={{fontWeight:"400"}} color='teal.500' href='#'>
                        Headway
                    </Link>
                    </Text>
                </div>
            </div>
            <div className={styles.form}>
                <h1 className={styles.h1}>Sign In</h1>
                <Button onClick={handleGoogle}  className={styles.gog} leftIcon={<FcGoogle size={25}  />}  padding= '20px 17%' variant='none'>
                    Sign In With Google
                </Button>

                <div className={styles.lp_container1}>
                    <div className={styles.lp_lines}>
                        <div className={styles.lp_diamonds}>or</div>
                    </div>
                </div>
                {error && <Alert status='error'> <AlertIcon /> {error}</Alert>}
                <form onSubmit={handleSubmit}>
                <Input 
                onChange={(e)=>setEmail(e.target.value)} 
                className={styles.email} 
                focusBorderColor='none' 
                htmlSize={4} 
                width='82%'
                name="email" 
                placeholder="Email"
                
                />
                
                <Input 
                onChange={(e)=>setPassword(e.target.value)} 
                className={styles.password}
                htmlSize={4}  
                focusBorderColor='none' 
                width='82%'
                name="password" 
                type='password' 
                placeholder="Password"
                
                />

               
                <Checkbox style={{marginTop:"15px"}} defaultChecked>Remember me</Checkbox>

                <br/>

                <Input type="submit"  className={styles.submit} bgColor='#00b289' variant='none' height="45px" width="82%"/>
                    {/* Log In
                </Input> */}
                </form>
                <h1 className={styles.Reset}>Reset Password</h1>
                <h1 className={styles.Resend}>Resend Verification Email</h1>
            </div>
        </div>
    )
}