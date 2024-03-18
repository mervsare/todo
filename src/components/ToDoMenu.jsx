import React from "react";
import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const ToDoMenu = () => {
  const [task, setTask] = useState("");

  return (
    <div className="mx-auto mt-8">
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="w-[350px] border-2 border-blue-900 bg-gradient-to-r from-sky-900 via sky-500 to-indigo-200 font-bold rounded-md px-3 py-2 mr-3 placeholder:text-white"
          placeholder="Enter Task..."
        />
        <button className="bg-blue-500 hover:bg-blue-600 dont-bold py-4 px-4 rounded">
          <MdAddCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default ToDoMenu;
