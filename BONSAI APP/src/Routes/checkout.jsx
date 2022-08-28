import { Select } from "@chakra-ui/react";
import { CheckoutNavbar } from "../components/CheckoutNavbar";
import styles from "../Styles/checkout.module.css"

export function Checkout(){
    
    return(
        <>
        <div>
            <CheckoutNavbar/>
        </div>
        <div>
            <div className={styles.outer}>
                <div className={styles.inner}>
                    <div className={styles.innerleft}></div>
                    <div className={styles.innerright}>
                    <div className={styles.rightheader}>
                        Welcome, Supriyo!
                    </div>
                    <div className={styles.rightmain}>
                    What type of work do you typically do?
                    </div>
                    <Select margin='auto' width='85%' placeholder='Type or Select a Option'>
                    <option value='option1'>Acting</option>
                    <option value='option2'>Animation</option>
                    <option value='option3'>Analytics</option>
                    <option value='option3'>Art-Direction</option>
                    <option value='option3'>Architechture</option>
                    </Select>
                    </div>
                </div>
            </div>    
        </div>
        </>
    )
}