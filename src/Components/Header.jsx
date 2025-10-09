import { FaReact } from "react-icons/fa";

export default function Header() {
  return (
    <h1 className="text-center text-xl sm:text-3xl font-semibold text-black flex justify-center">
      <div className="flex items-center gap-2 flex-wrap">
        TODO APP WITH - 
        <FaReact className="text-[#61DAFB] cursor-pointer transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_#61DAFB]" />
      </div>
    </h1>
  );
}
