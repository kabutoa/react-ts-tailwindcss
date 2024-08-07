import { Link, NavLink, useNavigate } from 'react-router-dom'
import type { Props } from '@/types'

function Header({ className, children, ...rest }: Props): JSX.Element {
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    const id = 1
    navigate(`${path}?id=${id}`, {
      state: {
        stateKey: 'stateData'
      }
    })
  }

  return (
    <header className={[className, 'bg-blue-500 p-4 text-white'].join(' ')} {...rest}>
      <nav className="flex items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <NavLink to="/list" className="ml-2 hover:underline">
          List
        </NavLink>
        <button onClick={() => handleNavigation('/about')} className="ml-2 hover:underline">
          About
        </button>
        {children}
      </nav>
    </header>
  )
}

export default Header
