import React from "react";
import classes from "./Checkout.module.css";
import Navbar from "../../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { BsBank2 } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  updateItemCount,
  emptyCartDataAndResetCount,
} from "../../coffee redux/slices/cartSlices";
const Checkout = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData.cartData);
  const handleAdd = (id, operation) => {
    dispatch(
      updateItemCount({
        id,
        operation,
      })
    );
  };
  const handleSubtract = (id, operation, count) => {
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
  const handleRemoverBtn = (id) => {
    dispatch(emptyCartDataAndResetCount({ id }));
  };
  return (
    <>
      <Navbar />
      <Container>
        <div className={classes.mainBody}>
          <Row>
            <Col md={12} lg={8}>
              <p className={classes.formHeading}>Complete seu pedido</p>
              <div className={classes.form}>
                <div className={classes.locFormDiv}>
                  <div className={classes.locIconDiv}>
                    <CiLocationOn className={classes.locIcon} />
                  </div>
                  <div className={classes.locTextDiv}>
                    <p className={classes.locText1}>Endereço de Entrega</p>
                    <p className={classes.locText2}>
                      Informe o endereço onde deseja receber seu pedido
                    </p>
                  </div>
                </div>
                <Row>
                  <Col>
                    <input
                      type="text"
                      className={classes.input1}
                      placeholder="CEP"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input
                      type="text"
                      className={classes.input2}
                      placeholder="Rua"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <input
                      type="text"
                      placeholder="Número"
                      className={classes.input2}
                    />
                  </Col>
                  <Col>
                    <input
                      type="text"
                      className={classes.input2}
                      placeholder="Complemento"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <input
                      type="text"
                      placeholder="Bairro"
                      className={classes.input2}
                    />
                  </Col>
                  <Col>
                    <input
                      type="text"
                      className={classes.input2}
                      placeholder="Cidade"
                    />
                  </Col>
                  <Col md={2}>
                    <input
                      type="text"
                      className={classes.input2}
                      placeholder="UF"
                    />
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <div className={classes.payment}>
                    <div className={classes.locFormDiv}>
                      <div className={classes.dollarIconDiv}>
                        <BsCurrencyDollar className={classes.locIcon} />
                      </div>
                      <div className={classes.locTextDiv}>
                        <p className={classes.locText1}>Pagamento</p>
                        <p className={classes.locText2}>
                          O pagamento é feito na entrega. Escolha a forma que
                          deseja pagar{" "}
                        </p>
                      </div>
                    </div>
                    <Row className={classes.paymentButtonsWrapper}>
                      <Col >
                        <button className={classes.paymentButtons}>
                          <div className={classes.paymentIconDiv}>
                            <CiCreditCard1 className={classes.paymentIcon} />{" "}
                            CARTÃO DE CRÉDITO
                          </div>
                        </button>
                      </Col>
                      <Col>
                        <button className={classes.paymentButtons}>
                          <div className={classes.paymentIconDiv}>
                            <BsBank2 className={classes.paymentIcon} /> CARTÃO
                            DE DÉBITO
                          </div>
                        </button>
                      </Col>
                      <Col>
                        <button className={classes.paymentButtons}>
                          <div className={classes.paymentIconDiv}>
                            <CiMoneyBill className={classes.paymentIcon} />{" "}
                            DINHEIRO
                          </div>
                        </button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={4}>
              <p className={classes.formHeading}>Cafés selecionados</p>
              <div className={classes.checkoutCard}>
                {cartData.map((item) => (
                  <div key={item.id}>
                    <div className={classes.checkoutCardItem}>
                      <div className={classes.checkoutItemImgDiv}>
                        <img
                          className={classes.checkoutItemImg}
                          src={item.image}
                          alt="coffeeImg"
                        />
                      </div>
                      <div className={classes.checkoutContentDiv}>
                        <div className={classes.titleAmount}>
                          <div className={classes.titleText}>
                            <p>{item.title} </p>
                          </div>
                          <div className={classes.titleAmount1}>
                            <p>
                              R${" "}
                              <span className={classes.amountSpan}>
                                {item.amount * item.count}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className={classes.buttonWrapper}>
                          <div className={classes.countDiv}>
                            <button
                              className={classes.plusMinus}
                              onClick={() =>
                                handleSubtract(item.id, "-", item.count)
                              }
                            >
                              -
                            </button>{" "}
                            <span className={classes.count}>{item.count}</span>{" "}
                            <button
                              className={classes.plusMinus}
                              onClick={() => handleAdd(item.id, "+")}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <button
                              className={classes.remover}
                              onClick={() => handleRemoverBtn(item.id)}
                            >
                              <RiDeleteBin6Line
                                className={classes.removerIcon}
                              />
                              Remover
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className={classes.horizontalRuler} />
                  </div>
                ))}
                <div className={classes.totalMainDiv}>
                  <Row>
                    <Col>Total de itens </Col>
                    <Col>
                      <p className={classes.totalAmount}>
                        R${" "}
                        {cartData.reduce(
                          (total, item) => total + item.amount * item.count,
                          0
                        )}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>Entrega </Col>
                    <Col>
                      <p className={classes.totalAmount}>
                        {cartData.length > 0 ? "R$ 3,50" : "R$ 0"}
                      </p>
                    </Col>
                  </Row>
                  <div className={classes.mainTotalAmount}>
                    <Row>
                      <Col>Total </Col>
                      <Col>
                        <p className={classes.totalAmount}>
                          R${" "}
                          {cartData.length > 0
                            ? cartData.reduce(
                                (total, item) =>
                                  total + item.amount * item.count,
                                0
                              ) + 350
                            : cartData.reduce(
                                (total, item) =>
                                  total + item.amount * item.count,
                                0
                              )}
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className={classes.confirmBtnDiv}>
                  <button>CONFIRMAR PEDIDO</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
