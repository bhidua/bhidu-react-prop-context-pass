import { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Layout({ navbar, content }) {
  const [navPass, setNavPass] = useState(0);
  const handleClick = (pass) => {
    pass = navPass + 1;
    setNavPass(pass);
  };
  return (
    <div>
      Layout: {navPass}
      <Navbar data={{ navPass, handleClick }} />
      <Content data={content} />
    </div>
  );
}
