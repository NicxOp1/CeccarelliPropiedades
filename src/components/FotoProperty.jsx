import React from "react";

import { Fade } from "react-awesome-reveal";
// import { height } from "dom7";

export default function PhotoHome(props) {
  let { name, photo } = props;

  return (
    <>
      <div className="imgDiv">
        <Fade>
          <img style={{height:"25rem",width:"23rem"}} src={photo} alt={name}></img>
        </Fade>
      </div>
    </>
  );
}
