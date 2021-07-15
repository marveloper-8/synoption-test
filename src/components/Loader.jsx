import React from "react";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
  width: 100%;
`;

const Loader = () => {
  let color = "#0C56E9";

  return <BarLoader color={color} loading={true} css={override} size={150} />;
};

export default Loader;
