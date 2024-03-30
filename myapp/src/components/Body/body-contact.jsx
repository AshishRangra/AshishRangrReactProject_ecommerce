import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
const BodyContact = () => {
  return (
    <div>
      <div>
        <div className="body-contact">
          <ul>
            <li>
              <LocalShippingIcon /> Free Shipping WorldWide <br />
              On order over $150-7 days a week
            </li>
            <li>
              <SupportAgentIcon /> 24/7 Customer Service <br />
              Call us 24/7 at 9584033242
            </li>
            <li>
              <LocalAtmIcon /> Money Back Guaratee <br />
              Send within 30 days
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BodyContact;
