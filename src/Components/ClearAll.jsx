import useTodos from "../Custom Hook/useTodos";

export default function ClearAll() {
  const { deleteAllTodo } = useTodos();

  return (
    <div className="flex justify-center mt-3 sm:mt-4">
      <button
        type="button"
        onClick={deleteAllTodo}
        className="cursor-pointer w-full sm:w-28 h-9 text-sm sm:text-base font-bold rounded-lg border-2 sm:border-3 border-black bg-[#603FB0] text-white hover:bg-[#8F78C8] hover:text-black"
      >
        Clear all
      </button>
    </div>
  );
}
