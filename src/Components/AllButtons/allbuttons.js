import React from "react";
import { Button } from "reactstrap";

import "./allbuttons.css";

const AllButtons = (props) => {
  return (
    <div className="btnarea">
      <Button color="primary">primary</Button>
      &nbsp; &nbsp;
      <Button color="secondary">secondary</Button>
      &nbsp; &nbsp;
      <Button color="success">success</Button>
      &nbsp; &nbsp;
      <Button color="info">info</Button>
      &nbsp; &nbsp;
      <Button color="warning">warning</Button>
    </div>
  );
};

export default AllButtons;
