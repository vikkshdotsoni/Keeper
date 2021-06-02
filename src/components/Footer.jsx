import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Vikash Kumar Soni {year}</p>
    </footer>
  );
}

export default Footer;
