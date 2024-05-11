import React from "react";
import packageJson from "../../../package.json"

const Footer = () => {
  return (
    <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', color: 'white' }}>
            build v.{packageJson.version}
    </div>
  );
};



export default Footer;

