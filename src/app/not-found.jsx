import React from "react";

export default function Notfound() {
  return (
    <div className="m-[2rem] flex flex-col gap-[2rem]">
      <p className="bg-blue-200 text-black p-4 h-[5rem] font-bold flex items-center  text-lg ">
        Header
      </p>
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p> Could't Found Requested Resource </p>
      <p className="bg-slate-300 text-black p-4 h-[5rem] font-bold flex items-center  text-lg ">
        Footer
      </p>
    </div>
  );
}
