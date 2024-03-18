import React from "react";
import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import ReactSwitch from "react-switch";

const ToDoMenu = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task) {
      const toDo = {
        id: list.length + 1,
        title: task,
        toogle: false,
      };
      setList([toDo, ...list]);
      setTask("");
    }
  };
  const deleteTask = (id) => {
    const filtered = list.filter((task) => task.id !== id);
    setList(filtered);
  };
  const toggleTask = (id) => {
    const updatedTask = list.map((task) =>
      task.id === id ? { ...task, toggle: !task.toggle } : task
    );
    setList(updatedTask);
  };

  return (
    <div className="mx-auto mt-8">
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          className="w-[350px] border-2 border-blue-900 bg-gradient-to-r from-sky-900 via sky-500 to-indigo-200 font-bold rounded-md px-3 py-2 mr-3 placeholder:text-white"
          placeholder="Enter Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-sky-900  hover:bg-blue-600 dont-bold py-4 px-4 rounded"
          onClick={addTask}
        >
          <MdAddCircleOutline />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div
          className={`${
            list.length > 0 &&
            "bg-gradient-to-r from-sky-500 via bg-indigo-100 to-lime-200 pt-2 pl-2 pr-2"
          }`}
        >
          {list.length === 0 ? (
            <h1 className="font-bold text-3xl text-blue-700 p-2"></h1>
          ) : (
            list.map((task) => (
              <div
                className={`flex w-[350px] text-md font-bold items-center space-x-2 bg-neutral-50 p-2 rounded-md mb-2
                ${
                  task.toggle
                    ? "bg-gradient-to-r from-sky-500 via bg-indigo-100 to-lime-200  border-2 border-blue-900 text-gray-300 line-through"
                    : "bg-sky-900"
                }
                    `}
                key={task.id}
              >
                <h4
                  className={`flex-grow ${task.toogle ? "line-through" : ""}`}
                >
                  {task.title}
                </h4>
                <button
                  className="text-blue-900 font-bold text-xl py-1 px-2 rounded"
                  onClick={() => deleteTask(task.id)}
                >
                  <RiDeleteBin5Fill />
                </button>
                <ReactSwitch
                  checked={task.toggle}
                  height={20}
                  width={40}
                  handleDiameter={18}
                  onColor="#4299e1"
                  offColor="#ccc"
                  checkedIcon={false}
                  uncheckIcon={false}
                  onChange={() => toggleTask(task.id)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoMenu;
