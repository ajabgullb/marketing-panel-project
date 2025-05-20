import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { User } from "lucide-react"
import { useSelector } from "react-redux"

interface UserState {
  auth: {
    authStatus: boolean
  }
}

const AuthComponents = ({ className }: any) => {
  const navigate = useNavigate()
  const authStatus = useSelector((state: UserState) => state.auth.authStatus)

  return (
    <div className={`flex items-center ${className}`}>
      {authStatus ? (
        <button
          onClick={() => navigate("/profile")}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          aria-label="Profile"
        >
          <User className="w-5 h-5 text-gray-700" />
        </button>
      ) : (
        <>
          <Button
            variant="ghost"
            className="text-gray-700 hover:bg-gray-100 hover:text-black mx-1 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
          <Button
            className="bg-black text-white hover:bg-gray-800 mx-1 cursor-pointer"
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
