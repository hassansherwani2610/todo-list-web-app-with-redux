import { useState } from "react";
import { addTodo } from "../Features/Todo/TodoSlice";
import useTodos from "../Custom Hook/useTodos";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState("");

  const { createTodo } = useTodos();

  const handleAddTodo = async () => {
    if (inputValue.trim() === "") return;
    await createTodo(inputValue);
    setInputValue("");
  };

  const handleSaveKeyDown = (e) => {
    if(e.key === "Enter") handleAddTodo();
  }

  return (
    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <input
        type="text"
        placeholder="Add your new todo"
        className="flex-1 h-10 sm:h-12 bg-[#603FB0] rounded-lg border-2 sm:border-3 border-black text-white text-base sm:text-lg px-3 sm:px-4 placeholder-white outline-none"
        value={inputValue}
        onKeyDown={handleSaveKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="button"
        onClick={handleAddTodo}
        className="cursor-pointer h-10 sm:h-12 w-full sm:w-12 flex items-center justify-center rounded-lg border-2 sm:border-3 border-black bg-[#603FB0] text-white text-xl sm:text-2xl active:bg-[#8F78C8] active:text-black"
      >
        <i className="fa-solid fa-plus" />
      </button>
    </div>
  );
}
