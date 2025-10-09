import { useEffect } from "react";
import useTodos from "../Custom Hook/useTodos";
import TodoItem from "./TodoItem";


export default function TodoList() {
  const { todos , fetchTodos } = useTodos();

  useEffect(() => {
    fetchTodos();
  }, [])
  

  return (
    <div className="mt-4 sm:mt-5 flex-1 border-2 sm:border-3 border-black rounded-lg p-2 sm:p-3 flex flex-col gap-2 sm:gap-3 overflow-y-auto preview-scrollbar">
      {todos.length === 0 ? (
        <p className="mx-auto text-xs sm:text-base text-white bg-[#E74D3D] border-2 border-[#E74D3D] px-2 sm:px-3 py-1 sm:py-2 rounded">
          Yohooo!!, No TODO for now.
        </p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
