import { Star, MoreVertical, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { asyncDeleteTask } from "../Store/actions/TaskAction";
import { toast } from "react-toastify";

const TaskCard = ({ tsk }) => {
  // const { taskList } = useSelector((state) => state.taskSlice);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(asyncDeleteTask(id));
    toast.success("task deleted");
  };

  return (
    <div className="flex justify-between items-center bg-[#0F0F0F] hover:bg-[#3C3C3C] px-4 py-3 rounded-lg">
      {/* Left: Task Info */}
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 border border-white rounded-full" />
        <div>
          <p className="text-xs text-gray-400">My lists &gt; Personal</p>
          <p className="text-white text-base font-semibold">
            {tsk.title || "Add New Task"}
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 text-gray-400">
        <Star className="w-4 h-4 cursor-pointer hover:text-yellow-400" />
        <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
        <X
          className="w-4 h-4 cursor-pointer hover:text-red-500"
          onClick={() => deleteHandler(tsk.id)}
        />
      </div>
    </div>
  );
};

export default TaskCard;
