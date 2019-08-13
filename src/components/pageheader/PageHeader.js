/** @jsx jsx */
import {jsx} from "@emotion/core"
import pageHeaderStyles from "./styles";
 

function PageHeader ({title, tagline}){
    return (
      <header css={pageHeaderStyles}>
        <h1>{title}</h1>
        <p>{tagline}</p>
      </header>
    );

}
export default PageHeader