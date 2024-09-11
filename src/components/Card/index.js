import React from "react";
import classes from "./Card.module.css";
import { BiSolidCart } from "react-icons/bi";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartData,
  emptyCartDataAndResetCount,
  updateItemCount,
} from "../../coffee redux/slices/cartSlices";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.cartData.coffeeData);

  const handleAdd = (e, id, operation, item) => {
    e.stopPropagation();
    dispatch(addCartData({ item }));
    dispatch(updateItemCount({ id, operation }));
  };
  const handleSubtract = (e, id, operation, count) => {
    e.stopPropagation();
    dispatch(
      updateItemCount({
        id,
        operation,
      })
    );
    if (count === 1) {
      dispatch(emptyCartDataAndResetCount({ id }));
    }
  };
  const addToCart = (e, id, operation, count, item) => {
    e.stopPropagation();

    if (count === 0) {
      dispatch(addCartData({ item }));
      dispatch(updateItemCount({ id, operation }));
    }
    navigate("/checkout");
  };
  return (
    <Row>
      {data.map((item) => (
        <Col key={item.id} xl={3} lg={4} md={6} sm={12}>
          <div
            key={item.id}
            className={classes.card}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/card/${item.id}`);
            }}
          >
            <div key={item.id} className={classes.coffeeImgDiv}>
              <img src={item.image} alt="coffeeImg" />
            </div>
            <div className={classes.belowCoffeeImgDiv}>
              <div className={classes.mainTypesDiv}>
                {item.type.map((type, index) => (
                  <Col className={classes.typesCol} key={index}>
                    <div className={classes.types} key={index}>
                      <p className={classes.typesText} key={index}>
                        {type.toUpperCase()}
                      </p>
                    </div>
                  </Col>
                ))}
              </div>

              <div className={classes.title}>
                <p>{item.title}</p>
              </div>
              <div className={classes.description}>
                <p>{item.description}</p>
              </div>
              <div className={classes.buy}>
                <div className={classes.price}>
                  <p>
                    R$ <span className={classes.amount}>{item.amount}</span>
                  </p>
                </div>
                <div className={classes.countDiv} key={item.id}>
                  <button
                    className={classes.plusMinus}
                    onClick={(e) => handleSubtract(e, item.id, "-", item.count)}
                  >
                    -
                  </button>{" "}
                  <span className={classes.count} key={item.id}>
                    {item.count}
                  </span>{" "}
                  <button
                    className={classes.plusMinus}
                    onClick={(e) => handleAdd(e, item.id, "+", item)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className={classes.cartBtn}
                    onClick={(e) =>
                      addToCart(e, item.id, "+", item.count, item)
                    }
                  >
                    <BiSolidCart className={classes.cartIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Card;
