import { useDispatch, useSelector } from "react-redux";
import Tasks from "../Components/Tasks";
import { Ellipsis } from "lucide-react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { asyncAddTask } from "../Store/actions/TaskAction";
import TaskDetails from "../Components/TaskDetails";

const Personal = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const { taskList,selectedtask } = useSelector((state) => state.taskSlice);

  const submittask = (tskList) => {
    if (!tskList.title?.trim()) {
      return;
    }

    const task = {
      id: nanoid(),
      title: tskList.title,
      subtask: [],
      checked: false,
      attach:""
    };
    dispatch(asyncAddTask(task));
    reset();
  };

  return (
    <div className="ml-[250px] min-h-screen bg-[#252525] text-white p-6 ">
      <div className="bg-[#161616] flex  rounded-full p-2 items-center mb-4 font-semibold gap-4 w-[26rem] ">
        <h2 className="text-xl  border-r-[2px] border-[#252525] px-4">
          Personal
        </h2>
        <h2 className="text-xl text-grey-400  border-r-[2px] border-[#252525] px-4">
          Share
        </h2>

        <h2 className="text-xl text-grey-400 border-r-[2px] border-[#252525] px-4">
          View
        </h2>
        <Ellipsis size={20} />
      </div>
      <div className="flex flex-col md:flex-row gap-2">
      <div className="w-1/2 p-4 bg-[#161616] rounded-lg h-[80vh] flex flex-col justify-between mt-5">
          <div className="max-h-[80vh] overflow-y-auto custom-scrollbar pr-2 space-y-2">
            {taskList.map((task) => (
              <Tasks key={task.id} task={task}/>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(submittask)}
            className="pt-4 border-t border-gray-700"
          >
            <input
              {...register("title")}
              type="text"
              className="w-full bg-[#393939] p-2 rounded text-white outline-none"
              placeholder="+ Add task"
            />
          </form>


        </div>
        <div className="w-1/2 p-4 rounded-lg">
            {selectedtask && (
          <div className="bg-[#161616] rounded-full rounded-lg p-6 h-[85vh]">
           <TaskDetails selectedtask = {selectedtask} />
          </div>
        )}
        </div>  
      </div>
    </div>
  );
};

export default Personal;
