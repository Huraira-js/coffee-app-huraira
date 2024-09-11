import React from "react";
import classes from "./Navbar.module.css";
import Logo from "../../images/Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cartData.cartData).length;
  return (
    <Container>
      <nav className={classes.nav}>
        <div
          className={classes.logo}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <div className={classes.mainBtnDiv}>
            <div className={classes.locButton}>
              <div className={classes.locIcon}>
                <FaLocationDot className={classes.locIcon} />
              </div>
              <div className={classes.locText}>Porto Alegre, RS</div>
            </div>
            <div className={classes.cartBtnDiv}>
              <div className={classes.CartIcon}>
                <button
                  className={classes.cartBtn}
                  onClick={() => {
                    navigate("/checkout");
                  }}
                >
                  <FaShoppingCart />
                  {cartQuantity > 0 && (
                    <span className={classes.cartBadge}>{cartQuantity}</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
