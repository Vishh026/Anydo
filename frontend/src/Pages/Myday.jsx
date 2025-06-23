import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {  asyncAddTask } from "../Store/actions/TaskAction";
import TaskCard from "../Components/TaskCart";

const Myday = () => {
  const { register, handleSubmit,reset } = useForm();
  const { user } = useSelector((state) => state.userSlice);
  const { taskList } = useSelector((state) => state.taskSlice);

  
  const dispatch = useDispatch();

  const submittask = (tskList) => {
   const task = {
    id:nanoid(),
    task:tskList.task

   }
   console.log(task)
   dispatch(asyncAddTask(task));
   reset()
  };

  return (
    <main className="ml-[250px] px-4 sm:px-8 py-8 min-h-screen bg-[#1e1e1e] relative text-white overflow-hidden">
      {/* Content Block */}
      <div className="max-w-3xl w-full flex flex-col gap-10">
        {/* Greeting */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Good Night, <span className="text-blue-400">{user?.username}</span>.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mt-1">
            Remove doubts with action
          </p>
        </div>

        {/* Calendar Card */}
        <div className="bg-black bg-opacity-80 rounded-xl p-5 flex items-center gap-6 shadow-lg">
          <div className="text-center">
            <p className="text-xs text-gray-300">THU</p>
            <p className="text-4xl font-bold leading-tight">29</p>
            <p className="text-sm text-gray-400">May</p>
          </div>
          <p className="text-sm text-white">
            You have no events scheduled for today
          </p>
        </div>
      </div>
      {/* task */}
      <div className="max-w-3xl w-full flex flex-col gap-2 mt-5 max-h-[300px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
      {taskList.map((t) => (
        <TaskCard key={t.id} tsk={t} />
      ))}
    </div>

      {/* Add Task Bar Pinned to Bottom */}
      <form
  onSubmit={handleSubmit(submittask)}
  className="absolute bottom-6 left-[20px] w-[calc(100%-250px)] px-4 sm:px-8 z-10"
>
  <div className="max-w-3xl flex items-center bg-[#121212] border border-gray-700 px-4 py-3 rounded-xl shadow-md">
    <span className="text-gray-400 mr-3 text-xl">+</span>
    <input
      {...register("task")}
      type="text"
      placeholder="Add task"
      className="bg-transparent outline-none flex-1 text-sm placeholder-gray-400 text-white"
    />
  </div>
</form>


      {/* Blue Glow */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500 rounded-full opacity-20 blur-[120px] pointer-events-none z-0" />
    </main>
  );
};

export default Myday;
