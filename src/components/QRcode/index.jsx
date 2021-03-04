import React from "react";

var QRCode = require("qrcode.react");

function MyQRrcode() {
  return <QRCode value="http://facebook.github.io/react/" />;
}

export default MyQRrcode;
