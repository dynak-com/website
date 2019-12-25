import React from "react";
import { StyledFontAwesomeIcon } from "./icons-bar.styles";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  faGitlab
} from "@fortawesome/free-brands-svg-icons";

const IconsBar = () => {
  return (
    <div className="display-4 text-center">
      <a
        href="https://pl.linkedin.com/company/dynak-com?trk=public_profile_topcard_current_company"
        className="d-inline-block my-2 mx-4"
      >
        <StyledFontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/" className="d-inline-block my-2 mx-4">
        <StyledFontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://gitlab.com/dynak.com"
        className="d-inline-block my-2 mx-4"
      >
        <StyledFontAwesomeIcon icon={faGitlab} />
      </a>
      <a href="https://twitter.com/" className="d-inline-block my-2 mx-4">
        <StyledFontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://facebook.com/" className="d-inline-block my-2 mx-4">
        <StyledFontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://instagram.com/" className="d-inline-block my-2 mx-4">
        <StyledFontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default IconsBar;
