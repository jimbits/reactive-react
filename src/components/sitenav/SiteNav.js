/** @jsx jsx */
import {jsx} from "@emotion/core"
import navbarStyles from "./styles"
 
function Navbar() {
    return (
      <nav css={navbarStyles}>
        <ul>
          <li>
             Counter Culture
          </li>
        
        </ul>
      </nav>
    );
}

export default Navbar
