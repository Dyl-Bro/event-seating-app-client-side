import React from "react";

//rgba(113, 209, 169, 0.945)

function Header() {
  return (
    <div
      className="p-2 text-xl tracking-widest font-header-style
     text-[#71d1a9f1] bg-teal-800
     lg:text-2xl xl:text-4xl 2xl:text-6xl"
    >
      <span className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl">E</span>
      vent{" "}
      <span className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl">S</span>
      eater
    </div>
  );
}

export default Header;
