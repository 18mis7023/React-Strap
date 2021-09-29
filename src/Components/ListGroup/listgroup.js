import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

import "./listgroup.css";

const Listgroup = (props) => {
  return (
    <ListGroup className="listgroup">
      <ListGroupItem>
        <NavLink className="linkbtn" exact to="/sudhindra/buttons">
          Buttons
        </NavLink>
      </ListGroupItem>
      <ListGroupItem>ModalBox</ListGroupItem>
      <ListGroupItem>Carousel</ListGroupItem>
      <ListGroupItem>Many more ....</ListGroupItem>
    </ListGroup>
  );
};

export default Listgroup;
