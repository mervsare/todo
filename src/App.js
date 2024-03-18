import "./App.css";
import ToDoMenu from "./components/ToDoMenu";

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-sky-200 via-lime-100 to-lime-300">
      <h1 className="text-blue-900 mb-8 text-5xl pt-12 font-bold">
        To Do List
      </h1>
      <ToDoMenu />
    </div>
  );
}

export default App;
