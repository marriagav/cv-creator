import React from "react";

interface NavBarProps {
  className: string;
  title: string;
}

function NavBar(props: NavBarProps) {
  return (
    <header className={props.className}>
      <h1>{props.title}</h1>
    </header>
  );
}

export default NavBar;
