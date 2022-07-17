import React from "react";

function DeleteItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group min-w-fit text-red-500 hover:text-white">
      <Icon className="h-8 sm:h-10 xl:h-12 2xl:h-20 mb-1 group-hover:animate-bounce" />
      <p className="lg:text-xl 2xl:text-4xl opacity-0 group-hover:opacity-100 text-center tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default DeleteItem;
