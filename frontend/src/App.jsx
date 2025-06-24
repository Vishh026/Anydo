import { useEffect } from "react"
import Sidebar from "./Components/Sidebar"
import MainRoutes from "./Mainroutes/MainRoutes"
import { useDispatch } from "react-redux"
import { asyncCurrentUser } from "./Store/actions/UserActions"
import { asyncLoadAllTask } from "./Store/actions/TaskAction"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncCurrentUser())
     dispatch(asyncLoadAllTask())
   
  },[])
  return (
   <>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <MainRoutes />
      </div>
    </div>
   </>
  )
}

export default App