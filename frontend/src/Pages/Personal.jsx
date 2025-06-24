import { useSelector } from "react-redux";
import TaskList from "../Components/Tasks";
import Tasks from "../Components/Tasks";
import { Ellipsis } from "lucide-react";

const Personal = () => {
  const { taskList } = useSelector((state) => state.taskSlice);
  console.log(taskList);

  return (
    <div className="ml-[250px] min-h-screen bg-[#252525] text-white p-6 ">
      <div className="bg-[#161616] flex  rounded-full p-2 items-center mb-4 font-semibold gap-4 w-[26rem]">
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
        {/* Left: Task List Column */}
        <div className="w-1/2 p-4 bg-[#161616] rounded-lg h-[80vh] flex flex-col justify-between">
          <div className="max-h-[80vh] overflow-y-auto custom-scrollbar pr-2 space-y-2">
            {taskList.map((task) => (
              <Tasks key={task.id} task={task} />
            ))}
          </div>

          <div className="pt-4 border-t border-gray-700">
            <input
              type="text"
              className="w-full bg-[#393939] p-2 rounded text-white outline-none"
              placeholder="+ Add task"
              disabled
            />
          </div>
        </div>
        {/* Right: Task Detail Card */}
        <div className="w-1/2 p-4  ">
          <div className="bg-[#161616] rounded-full rounded-lg p-6 h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">m m</h2>
              <button className="text-sm text-gray-400 hover:text-white">
                Mark as complete
              </button>
            </div>

            <div className="flex gap-2 mb-4">
              <button className="bg-[#252525] rounded-full text-white px-3 py-2">
                🔔 Remind me
              </button>
              <button className="bg-[#252525] rounded-full text-white px-3 py-2">
                📒 Personal
              </button>
              <button className="bg-[#252525] rounded-full text-white px-3 py-2">
                # Tags
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-sm text-gray-400 mb-1">NOTES</h3>
              <h3 className="p-3 text-gray-400 text-xl"></h3>
              Insert your notes here
            </div>

            <div className="mb-6">
              <h3 className="text-sm text-gray-400 mb-1 border-b-3 border-zinc-100 border-rounded py-2">
                SUBTASKS 0/0
              </h3>
              <div className="py-3 rounded text-gray-400">
                ☐ Add a new subtask
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-1">ATTACHMENTS</h3>
              <div className="bg-[#252525] p-6 rounded border border-dashed border-gray-600 text-center text-gray-400">
                Click to add / drop your files here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
