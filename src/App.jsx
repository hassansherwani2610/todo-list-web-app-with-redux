import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import ClearAll from "./Components/ClearAll";

export default function App() {
  return (
    <main className="w-screen h-screen bg-neutral-900 flex items-center justify-center p-2 sm:p-4">
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down { animation: slideDown 0.4s ease forwards; }
        .preview-scrollbar::-webkit-scrollbar { width: 8px; }
        .preview-scrollbar::-webkit-scrollbar-track {
          background: #8F78C8;
          border-radius: 10px;
        }
        .preview-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4B0082;
          border-radius: 10px;
          border: 1.5px solid #CBA6F7;
        }
        .preview-scrollbar { scrollbar-width: auto; }
      `}</style>

      <div className="w-full max-w-3xl h-[90%] sm:h-[81%] bg-[#8F78C8] rounded-lg sm:rounded-xl border-2 sm:border-4 border-black p-4 sm:p-6 flex flex-col">
        <Header />
        <TodoInput />
        <TodoList />
        <ClearAll />
      </div>
    </main>
  );
}
