import { EllipsisVertical, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectedTask, toggleTask } from "../Store/Reducers/TaskSlice";
import { asyncDeleteTask } from "../Store/actions/TaskAction";
import { toast } from "react-toastify";

const Tasks = ({ task }) => {
  const { taskList } = useSelector((state) => state.taskSlice);
  const dispatch = useDispatch();

  const togglingHandler = () => {
    dispatch(toggleTask(task.id));
  };

  const deleteHandler = (id) => {
    dispatch(asyncDeleteTask(id));
    toast.success("task deleted");
  };
  const taskSelecthandler = () => {
    const findTsk = taskList.find((t) => t.id == task.id);
    if (findTsk) {
      dispatch(selectedTask(findTsk));
    }
  };

  return (
    <div
      onClick={() => taskSelecthandler()}
      className="flex items-center justify-between  text-white text-sm sm:text-base px-4 py-3 rounded-lg transition-all group hover:bg-[#393939]  "
    >
      {/* Checkbox + Animated Line-through */}
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={togglingHandler}
          className="w-4 h-4 accent-[#4f46e5] rounded cursor-pointer"
        />

        <div className="relative w-full">
          <span className="capitalize block truncate pr-4">
            {task?.title || "Untitled task"}
          </span>

          {/* Line-through overlay */}
          <span
            className={`absolute left-0 top-1/2 h-[1px] bg-gray-400 transition-all duration-1000 ease-in-out
              ${task.checked ? "w-full scale-x-95" : "w-0 scale-x-0"}
            `}
            style={{ transformOrigin: "left center" }}
          />
        </div>
      </div>

      {/* Toggle Icon based on state */}
      {task.checked ? (
        <X
          onClick={() => deleteHandler(task.id)}
          className="text-gray-500 rounded-lg bg-zinc-300 border-1  cursor-pointer transition-all "
          size={18}
        />
      ) : (
        <EllipsisVertical
          className="text-gray-500 hover:text-white cursor-pointer transition-all"
          size={18}
        />
      )}
    </div>
  );
};

export default Tasks;
