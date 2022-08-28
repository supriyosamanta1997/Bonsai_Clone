import styles from "../Styles/signup.module.css"
import logstyles from "../Styles/loginContent.module.css"
import { Button,Link,Select, Text } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { Input } from '@chakra-ui/react'
import {Alert,AlertIcon,} from '@chakra-ui/react'
import {useNavigate } from "react-router-dom"
import { useState } from "react"
import { useUserAuth } from "../context/Authcontext"


export function Signup()
{
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const { SignUp }=useUserAuth();
    const Navigate=useNavigate();

    
    
    const handleSignUp=()=>{
        Navigate("/login")
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setError("")
        try{
            await SignUp(email,password);
            Navigate("/checkout")
           
        }
        catch(err)
        {
            setError(err.message)
           
        }
    }
   
   
    return(
        <div className={styles.outer}>
            <div className={styles.inner}>
                <div className={styles.innerleft}>
                    <div className={styles.innerheader}>
                        <img style= {{marginBottom:"16px"}} src="https://app.hellobonsai.com/assets/logos/bonsai-0fe7c417d79806408d8117d5a0ca871f0be3afb1104d54b53f59f53cbda2f28b.svg" width={100} alt=""/>
                        Join 500,000+ freelancers and agencies using Bonsai.
                    </div>
                    <div className={styles.innerfooter}>
                    <svg className="signup-page-cp-quote-icon" width="20" height="12" viewBox="0 0 22 16" fill="none">
                    <path d="M20.4582 3.2C18.1262 3.36 16.1387 4.82667 15.1847 6.85333H18.2057C19.4512 6.85333 20.4847 
                    7.86667 20.4847 9.14667V13.7067C20.4847 14.96 19.4777 16 18.2057 16H13.6212C12.3756 16 11.3421 14.9867
                    11.3421 13.7067V9.14667C11.3421 4.10667 15.4232 0 20.4317 0C20.4317 0 21.3328 0 21.3328 0.906667C21.3328
                    0.906667 21.3328 1.06667 21.3328 2.26667C21.3593 3.2 20.4582 3.2 20.4582 3.2ZM9.08961 3.2C6.75758
                    3.36 4.77006 4.82667 3.81605 6.85333H6.83708C8.0826 6.85333 9.11611 7.86667 9.11611 9.14667V13.7067C9.11611 
                    14.96 8.1091 16 6.83708 16H2.27903C1.03351 16 0 14.9867 0 13.7067V9.14667C0 4.10667 4.08105 0 9.08961 
                    0C9.08961 0 9.99062 0 9.99062 0.906667C9.99062 0.906667 9.99062 1.06667 9.99062 2.26667C9.99062 3.2 
                    9.08961 3.2 9.08961 3.2Z" fill="#00b289">
                       </path>
                    </svg>
                    <div className={styles.footerText}>
                        
                    Anyone doing #freelance work should use @bonsaiinc for contracts/payment. 
                    It's amazing and saves boatloads of time.

                    </div>
                    <div className={styles.footerQuote}>
                        Nathanael Smith, Product Designer
                    </div>
                    </div>
                </div>
                <div className={styles.innerright}>
                    <div className={styles.rightheader}>
                    Try Bonsai free with your Workflow today
                    </div>
                    <Button  className={logstyles.gog} leftIcon={<FcGoogle size={25}  />}  padding= '20px 18%' variant='none'>
                    Sign In With Google
                 </Button>
                 <div className={logstyles.lp_container1} style={{marginBottom:"-10px",marginBotton:"-5px"}}>
                    <div className={logstyles.lp_lines}>
                        <div className={logstyles.lp_diamonds}>or</div>
                    </div>
                </div>

                           {error && <Alert status='error'> <AlertIcon /> {error}</Alert>}
                

                
                <form onSubmit={handleSubmit}>



                 {/* Email Field    */}
                <div className={styles.Email}>
                <label className={styles.label}>EMAIL</label>
                <br/>
                <Input
                onChange={(e)=>setEmail(e.target.value)} 
                htmlSize={4} 
                width='100%' 
                focusBorderColor='none' 
                placeholder="Your@email.com" 
                />
                </div>


                {/* Name Field */}
                <div className={styles.Email}>
                <label className={styles.label} >FULL NAME</label>
                <br/>
                <Input
                htmlSize={4} 
                width='100%' 
                focusBorderColor='none' 
                placeholder="John smith" 
                />
                </div>


                {/* Password Field */}
                <div className={styles.Email}>
                <label className={styles.label}>PASSWORD</label>
                <br/>
                <Input 
                onChange={(e)=>setPassword(e.target.value)} 
                htmlSize={4} width='100%' 
                focusBorderColor='none' 
                placeholder="Enter Password"
                />
                <br/>
                <label className={styles.req}>Your Character must be greater than 6 Character</label>
                </div>


                {/* Country and Currency Field */}
                <div style={{marginTop:"20px"}}>
                <label className={styles.country}>COUNTRY</label>
                <label className={styles.currency}>CURRENCY</label>
                </div>
                <div className={styles.select}>
                <Select
                   
                placeholder='Select option' 
                focusBorderColor='none' 
                width='60%'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
                </Select>
                <Select 
                 
                placeholder='INR' 
                focusBorderColor='none' 
                width='35%'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
                </Select>
                </div> 
                
                <Text className={styles.acc}>
                    By creating an account,you accecpt out{' '}
                    <br/>
                    <Link color='teal.500' href='https://www.hellobonsai.com/terms'>
                        TermsAndCondition
                    </Link>
                </Text>
                <Input type="submit"  className={logstyles.submit} style={{marginTop:"8%"}}
                 bgColor='#00b289' variant='none' height="45px" width="82%"/>
                </form>





                <div className={styles.lp_container1} style={{marginBottom:"-10px",marginBotton:"-5px"}}>
                    <div className={styles.lp_lines}>
                        <div className={styles.lp_diamonds}>Already Have an Account?</div>
                    </div>
                </div>
                <Input  onClick={handleSignUp} className={logstyles.submit} style={{marginTop:"2%",textAlign:"center",fontWeight:"400"}}
                  variant='outline' height="45px" width="82%" placeholder="Log In"/>

                </div>
                </div>
                <div style={{
                            height:"100px",
                            width:"100%",
                            marginTop:"10%"
                            }}></div>  
                </div>
       
    )
}