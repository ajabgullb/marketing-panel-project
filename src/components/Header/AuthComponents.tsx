import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"

const AuthComponents = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full flex justify-center items-center gap-2'>
      <Button
        className='cursor-pointer'
        onClick={() => navigate("/signup")}
      >Signup</Button>
      <Button
        className='cursor-pointer'
        onClick={() => navigate("/login")}
      >Login</Button>
    </div>
  )
}

export default AuthComponents
