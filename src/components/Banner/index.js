import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Banner.module.css";
import BannerImg from "../../images/Imagem.png";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BiSolidStopwatch } from "react-icons/bi";
import { PiCoffeeFill } from "react-icons/pi";

const Banner = () => {
  return (
    <Container className={classes.mainBannerCont}>
      <div className={classes.mainDiv}>
        <div className={classes.mainTextDiv}>
          <div className={classes.bannerHeadText}>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          </div>
          <p className={classes.bannerParaText}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className={classes.belowText}>
            <Row>
              <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                <div className={classes.belowText1}>
                  <div className={classes.cartIconDiv}>
                    <FaShoppingCart />
                  </div>
                  <div className={classes.cartIconText}>
                    <p>Compra simples e segura</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                <div className={classes.belowText1}>
                  <div className={classes.boxIconDiv}>
                    <BsFillBoxSeamFill />
                  </div>
                  <div className={classes.boxIconText}>
                    <p>Embalagem mantém o café intacto</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                <div className={classes.belowText2}>
                  <div className={classes.cartStopwatchDiv}>
                    <BiSolidStopwatch />
                  </div>
                  <div className={classes.cartIconText}>
                    <p>Entrega rápida e rastreada</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                <div className={classes.belowText1}>
                  <div className={classes.cartCoffeeDiv}>
                    <PiCoffeeFill />
                  </div>
                  <div className={classes.boxIconText}>
                    <p>O café chega fresquinho até você</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={classes.bannerImgCont}>
          <img className={classes.img} src={BannerImg} alt="bannerImg" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
