import { Button, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "../Styles/navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleReview = () => {
    navigate("/review");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.navbar}>
      <div onClick={handleHome} className={styles.logodiv}>
        <img
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
          alt="logo"
          width="150"
        />
      </div>
      <div className={styles.middlediv}>
        <Stack direction="row" spacing={5}>
          <Button
            className={styles.prod}
            font="blue"
            fontWeight="400"
            color="#4c4d5f"
            fontSize="17px"
            rightIcon={<ChevronDownIcon w={5} h={5} />}
            variant="none"
          >
            Product
          </Button>
          <Button
            fontWeight="400"
            fontSize="17px"
            color="#4c4d5f"
            rightIcon={<ChevronDownIcon w={5} h={5} />}
            variant="none"
          >
            Templates
          </Button>
          <Button
            fontWeight="400"
            color="#4c4d5f"
            fontSize="17px"
            variant="none"
          >
            Pricing
          </Button>
          <Button
            onClick={handleReview}
            fontWeight="400"
            color="#4c4d5f"
            fontSize="17px"
            variant="none"
          >
            Reviews
          </Button>
        </Stack>
      </div>
      <div className={styles.enddiv}>
        <Stack direction="row" spacing={4}>
          <button onClick={handleLogin} className={styles.logbutton}>
            LOG IN
          </button>
          <button className={styles.freebutton}>START FREE</button>
        </Stack>
      </div>
    </div>
  );
}
export default Navbar;
