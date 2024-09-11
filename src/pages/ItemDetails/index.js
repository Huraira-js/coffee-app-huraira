import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ItemDetails.module.css";
import Navbar from "../../components/Navbar";
import { Container } from "react-bootstrap";
import {
  addCartData,
  updateItemCount,
  emptyCartDataAndResetCount,
} from "../../coffee redux/slices/cartSlices";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.cartData.coffeeData);
  const item = data.find((item) => item.id === parseInt(id, 10));

  const handleAddToCart = (item) => {
    dispatch(addCartData({ item }));
    dispatch(updateItemCount({ id: item.id, operation: "+" }));
  };

  const handleAdd = (item) => {
    dispatch(updateItemCount({ id: item.id, operation: "+" }));
  };
  const handleSubtract = (item) => {
    dispatch(
      updateItemCount({
        id: item.id,
        operation: "-",
      })
    );
    if (item.count === 1) {
      dispatch(emptyCartDataAndResetCount({ id: item.id }));
    }
  };
  const handleRemoverBtn = (id) => {
    dispatch(emptyCartDataAndResetCount({ id }));
  };

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <>
      <Navbar />
      <Container className={classes.body}>
        <div className={classes.mainItemBody}>
          <div className={classes.contentdiv}>
            <img
              src={item.image}
              alt={item.title}
              className={classes.coffeeImg}
            />
            <div className={classes.itemContent}>
              <p className={classes.itemTitle}>{item.title}</p>
              <p>{item.description}</p>
              <div className={classes.mainTypesDiv}>
                {item.type.map((type, index) => (
                  <div key={index} className={classes.types}>
                    <p className={classes.typesData}>{type.toUpperCase()}</p>
                  </div>
                ))}
              </div>
              <div className={classes.amountDiv}>
                <p className={classes.amountLabel}>R$</p>
                <p className={classes.amount}>{item.amount}</p>
              </div>
              <div className={classes.cartAction}>
                {item.count === 0 ? (
                  <button
                    className={classes.cartActionBtn}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </button>
                ) : (
                  <div className={classes.countDiv}>
                    <button
                      className={classes.plusMinus}
                      onClick={() => handleSubtract(item)}
                    >
                      -
                    </button>{" "}
                    <span className={classes.count}>{item.count}</span>{" "}
                    <button
                      className={classes.plusMinus}
                      onClick={() => handleAdd(item)}
                    >
                      +
                    </button>
                  </div>
                )}
                {item.count !== 0 && (
                  <button
                    className={classes.cartActionBtn}
                    onClick={() => handleRemoverBtn(item.id)}
                  >
                    Remove from cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ItemDetails;
