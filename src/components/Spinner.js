import React from "react";

function Spinner() {
  return (
    <div>
      <div className="w-16 h-16 xl:h-48 xl:w-48 border-4 border-y-transparent border-teal-900 border-double rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
