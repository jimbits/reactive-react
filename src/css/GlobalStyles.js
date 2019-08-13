import { Global } from "@emotion/core";
import React from "react";
import globalStyles from "./styles";
function GlobalStyles(props) {
  return <Global styles={globalStyles}>{props.children}</Global>;
}

export default GlobalStyles;
