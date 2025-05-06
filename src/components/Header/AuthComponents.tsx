import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { User } from "lucide-react"

const AuthComponents = ({ className }: any) => {
  const navigate = useNavigate()

  return (
    <div className={`w-full sm:w-1/4 flex items-center justify-center ${className}`}>
      <Button
        className='cursor-pointer mx-3 my-5'
        onClick={() => navigate("/signup")}
      >Signup</Button>
      <Button
        className='cursor-pointer mx-3 my-5'
        onClick={() => navigate("/login")}
      >Login</Button>

      {/* <User
        onClick={() => navigate("/profile")}
        className="cursor-pointer"
      /> */}
    </div>
  )
}

export default AuthComponents
