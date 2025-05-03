import { Link } from 'react-router-dom'

const Logo = ({className}: any) => {
  return (
    <div>
      <Link to="/">
        <div className={`font-bold text-2xl ${className}`}>
          Noman<span>Panel</span>
        </div>
      </Link>
    </div>
  )
}

export default Logo
