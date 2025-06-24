import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { asyncLoginUser, asyncLogoutUser } from "../Store/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


const Login = () => {
  const { user } = useSelector((state) => state.userSlice);
  
  
  const { register, handleSubmit } = useForm();
  const disaptch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (user) => {
    disaptch(asyncLoginUser(user))
    toast.success("Login Successfully")  
    navigate("/")
  }
  const logoutHandler = () => {
    disaptch(asyncLogoutUser())
    toast.success("Logout Successfully")  
    navigate("/")
  }

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8 ml-[250px]">

      <div className="w-full max-w-md backdrop-blur-md bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(loginHandler)}>
        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Must fill all the feilds" })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-black/20 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Must fill all the feilds",
              })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-black/20 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
              {user ? (
                <button
            
           onClick={() => logoutHandler()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-200 mt-3"
          >
           Logout
          </button>
                
              ) : (
                <button
            type="Login"
           onClick={() => loginHandler()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-200"
          >
           Login
          </button>
              )}
          
           
        </form>

        <p className="text-sm text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}
            className="text-blue-400 hover:underline cursor-pointer">
              Signup
            </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
