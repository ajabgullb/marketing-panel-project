import { Link } from 'react-router-dom'

const Logo = ({className}: any) => {
  return (
    <div>
      <Link to="/">
        <div className={`font-bold text-2xl mx-5 sm:text-right ${className}`}>
          Marketing<span>Panel</span>
        </div>
      </Link>
    </div>
  )
}

export default Logo
