import { EllipsisVertical } from "lucide-react";

const Tasks = ({ task }) => {
  return (
    <div className="flex items-center justify-between bg-[#2b2b2b] text-white text-sm sm:text-base p-3 rounded-lg hover:bg-[#3a3a3a] transition-all shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-4 h-4 accent-blue-500"
        />
        <span className="capitalize">{task?.title || "Add task"}</span>
      </div>
      <EllipsisVertical className="text-gray-400 hover:text-white cursor-pointer" size={20} />
    </div>
  );
};

export default Tasks;
