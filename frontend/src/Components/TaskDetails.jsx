import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { asyncUpdateTask } from "../Store/actions/TaskAction"



const TaskDetails = ({selectedtask}) => {
  console.log(selectedtask);
  
  const dispatch = useDispatch()
  const {register,handleSubmit,reset} = useForm({
    defaultValues: {
      title: selectedtask?.title,
      subtask: [],
      attach: "",
      checked: selectedtask?.checked,
     
    }
  })

  const updateHandler = (data) => {
    const newsubtask = data.subtask?.trim()
    const newattach = data.attach?.[0]?.name
    
    const updateData = {
      ...selectedtask,
      ...data,
      subtask : newsubtask 
      ? [...(selectedtask.subtask || []),newsubtask] : 
      [...(selectedtask.subtask || [])],

      attach : newattach || [...selectedtask.attach] || ""
    
    }
    dispatch(asyncUpdateTask(selectedtask.id,updateData))
reset
  }
    
  return selectedtask && (
  
    <form onSubmit={handleSubmit(updateHandler)}>
         <div className="flex justify-between items-center mb-4">
            <input type="text" {...register("title")} /> {selectedtask.title}
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
              <h3 className="py-3 text-gray-400 text-xl">
                Insert your notes here
              </h3>
             
            </div>

            <div className="mb-6">
              <h3 className="text-sm text-gray-400 mb-1 border-b-3 border-zinc-100 border-rounded py-2">
                SUBTASKS 0/0
              </h3>
              <input 
              {...register("subtask")} 
              type="text"
              placeholder="☐ Add a new subtask "/>
              {Array.isArray(selectedtask?.subtask) && 
                <div className="max-h-40 overflow-y-auto space-y-1 custom-scrollbar">
  {selectedtask?.subtask?.map((sub, id) => (
    <h1 key={id}>☐ {sub}</h1>
  ))}
</div>

              }
              <br/>
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-1">ATTACHMENTS</h3>
              {selectedtask.attach}
              <input 
              {...register("attach")}
              type="file"
              className="bg-[#252525] p-6 rounded border border-dashed border-gray-600 text-center text-gray-400" /><br/>
                Click to add / drop your files here
            </div>
    </form>
  )
}

export default TaskDetails