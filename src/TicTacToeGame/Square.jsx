import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        // textAlign: "center"    //we can also use this text-align:center to center the content(X/O) in the squares instead of flex properties above.
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
