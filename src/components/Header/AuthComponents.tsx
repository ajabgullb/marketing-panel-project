import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { User } from "lucide-react"
import { useSelector } from "react-redux"

interface UserState {
  authStatus: boolean
}

const AuthComponents = ({ className }: any) => {
  const navigate = useNavigate()
  const authStatus = useSelector((state: UserState) => state.authStatus)

  console.log(authStatus)
  return (
    <div className={`w-full sm:w-1/4 flex items-center justify-center ${className}`}>
      {
        authStatus ? (
          <User
            onClick={() => navigate("/profile")}
            className="cursor-pointer"
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
