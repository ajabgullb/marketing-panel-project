import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { User } from "lucide-react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

const AuthComponents = ({ className }: any) => {
  const navigate = useNavigate()
  const authStatus = useSelector((state: RootState) => state.auth.authStatus)

  return (
    <div className={`flex items-center ${className}`}>
      {authStatus ? (
        <button
          onClick={() => navigate("/dashboard")}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          aria-label="Profile"
        >
          <User className="w-5 h-5 text-gray-300 cursor-pointer" />
        </button>
      ) : (
        <>
          <Button
            variant="ghost"
            className="text-gray-300 hover:bg-gray-800 border border-gray-700 hover:text-white mx-1 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
          <Button
            className="bg-gray-700 text-white hover:bg-gray-600 mx-1 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
        </>
      )}
    </div>
  )
}

export default AuthComponents
