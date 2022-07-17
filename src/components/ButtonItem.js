import React from "react";

function ButtonItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 xl:w-24 text-black hover:text-white">
      <Icon className="h-8 sm:h-10 xl:h-12 2xl:h-20 mb-1 group-hover:animate-ping" />
      <p className="lg:text-xl 2xl:text-4xl opacity-0 group-hover:opacity-100 text-center tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default ButtonItem;
