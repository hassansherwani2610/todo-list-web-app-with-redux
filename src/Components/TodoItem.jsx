import useTodos from "../Custom Hook/useTodos";
import { removeTodo, updateTodo } from "../Features/Todo/TodoSlice";
import { useEffect, useRef, useState } from "react";

export default function TodoItem(props) {
  const { editTodo , deleteTodo } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.todo.text);
  const inputRef = useRef(null);

  useEffect(() => {
    setEditedText(props.todo.text);
  }, [props.todo.text]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = async () => {
    const trimmedText = editedText.trim();

    if (trimmedText === "") {
      setEditedText(props.todo.text);
      setIsEditing(false);
      return;
    }

    if (trimmedText !== props.todo.text) {
      await editTodo(props.todo.id, trimmedText);
    }

    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(props.todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") handleCancel();
  };

  return (
    <div className="w-full bg-[#603FB0] border-2 sm:border-3 border-black rounded-lg p-2 sm:p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 animate-slide-down">
      {isEditing ? (
        <input
          ref={inputRef}
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          className="
            flex-1 h-9 sm:h-10 px-2 sm:px-3 
            rounded-lg border-2 border-black
            text-[#2C1A47] text-sm sm:text-base font-medium
            placeholder-gray-300
            bg-[#B184E6]
            focus:bg-[#A26DE1]
            focus:outline-none focus:ring-2 focus:ring-[#FFD54F]
            transition-all duration-200
          "
          placeholder="Edit your todo..."
        />
      ) : (
        <p className="text-white text-sm sm:text-lg">- {props.todo.text}</p>
      )}

      <div className="flex items-center gap-1 sm:gap-2 self-end sm:self-auto">
        {!isEditing && (
          <>
            <button
              type="button"
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-black bg-[#FFD54F] active:bg-[#e6d7a5]"
              onClick={() => setIsEditing(true)}
            >
              <i className="fa-solid fa-pen-to-square" />
            </button>
            <button
              type="button"
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-black bg-[#E74D3D] active:bg-[#e88d83]"
              onClick={() => deleteTodo(props.todo.id)}
            >
              <i className="fa-solid fa-trash" />
            </button>
          </>
        )}

        {isEditing && (
          <>
            <button
              type="button"
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-black bg-[#4CAF50] active:bg-[#A5D6A7]"
              onClick={handleSave}
            >
              <i className="fa-solid fa-floppy-disk" />
            </button>
            <button
              type="button"
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-black bg-gray-400 active:bg-gray-300"
              onClick={handleCancel}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
