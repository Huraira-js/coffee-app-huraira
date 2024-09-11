import React from "react";
import classes from "./CardBody.module.css";
import Card from "../Card/index"
import { Container } from "react-bootstrap";
const CardBody = () => {
  return (
    <Container className={classes.mainBody}>
      <p className={classes.heading}>Nossos cafés</p>
      <Card/>
    </Container>
  );
};

export default CardBody;
