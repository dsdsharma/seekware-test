"use client";
import React, { useState } from "react";

export default function SearchFilter() {
  const [value, setValue] = useState("");

  const onChange = (e: any) => {
    const inptVal = e.target.value;

    setValue(inptVal);
  };

  

  

  return (
    <div>
      <input id="searchInput" onChange={onChange} value={value} className="border m-4"></input>
    </div>
  );
}
