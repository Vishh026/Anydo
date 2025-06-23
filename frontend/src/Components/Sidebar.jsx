import {
  Sun,
  CalendarRange,
  ListTodo,
  CalendarClock,
  Crown,
  Plus,
  User,
  Briefcase,
  ShoppingCart,
  UsersRound,
  Settings,
  LogIn
} from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { user } = useSelector((state) => state.userSlice)
  
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login")
  }
  
  return (
    <aside className="w-[250px] h-screen bg-black text-white flex flex-col justify-between fixed left-0 top-0 px-4 py-6">
      {/* Top: User Info + Navigation */}
      <div>
        <div className="mb-6 flex gap-4 items-center ">
          <div>
            <Settings className="w-8 h-8 text-gray-400 hover:text-blue-400 cursor-pointer" onClick={handleLogin} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              {user?.username || "Guest User"} 
            </h2>
          <p className="text-sm text-gray-400">Free Plan</p>
          </div>
        </div>

        {/* Go Premium */}
        <button className="flex items-center gap-2 text-yellow-400 text-sm mb-6">
          <Crown className="w-4 h-4" />
          Go Premium
        </button>

        {/* Navigation */}
        <nav className="space-y-4">
          <NavLink to = "/myday" className="flex items-center gap-2 text-blue-500">
            <Sun className="w-5 h-5" />
            My Day
          </NavLink>
          <NavLink to = "/sevennextdays" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <CalendarRange className="w-5 h-5" />
            Next 7 Days
          </NavLink>
          <NavLink to = "/alltask" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ListTodo className="w-5 h-5" />
            All My Tasks
          </NavLink>
          <NavLink to = "/calender" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <CalendarClock className="w-5 h-5" />
            My Calendar
            <span className="text-xs bg-gray-700 px-1 ml-1 rounded">Beta</span>
          </NavLink>
        </nav>

        {/* My Lists */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-gray-400 text-sm mb-2">
            <span>My lists</span>
            <Plus className="w-4 h-4 cursor-pointer text-gray-400 hover:text-white" />
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-white hover:text-blue-500 cursor-pointer">
              <User className="w-4 h-4" />
              Personal
            </li>
            <li className="flex items-center gap-2 text-white hover:text-blue-500 cursor-pointer">
              <Briefcase className="w-4 h-4" />
              Work
            </li>
            <li className="flex items-center gap-2 text-white hover:text-blue-500 cursor-pointer">
              <ShoppingCart className="w-4 h-4" />
              Grocery List
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom: Collaboration CTA */}
      <div className="bg-[#0a0a0a] p-4 rounded-lg text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <UsersRound className="w-5 h-5" />
          Easily collaborate with your family or team.
        </div>
        <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-1.5 rounded text-sm">
          Try it
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
