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
    <div className={`w-full sm:w-1/4 flex items-center justify-center ${className}`}>
      {
        authStatus ? (
          <User
            onClick={() => navigate("/profile")}
            className="mb-4 mr-32 sm:m-0 left-0 cursor-pointer"
          />
        ) : (
          <>
            <Button
              className='cursor-pointer mx-3 my-5'
              onClick={() => navigate("/signup")}
            >Signup</Button>
            <Button
              className='cursor-pointer mx-3 my-5'
              onClick={() => navigate("/login")}
            >Login</Button>
          </>
        )
      }
    </div>
  )
}

export default AuthComponents
