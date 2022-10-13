import { Link } from 'react-router-dom'
import { useAuthContext } from '../utils/context'

export const NavigationItems = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return isLoggedIn ? (
    <>
      <li className="nav-item">
        <a className="nav-link" href="">
          <i className="ion-compose"></i>&nbsp;New Article
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          <i className="ion-gear-a"></i>&nbsp;Settings
        </a>
      </li>
    </>
  ) : (
    <>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Sign up
        </Link>
      </li>
    </>
  )
}

export const PageHeader = () => {
  const { isLoggedIn } = useAuthContext()

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" className when you're on that page" */}
            <a className="nav-link active" href="">
              Home
            </a>
          </li>
          <NavigationItems isLoggedIn={isLoggedIn} />
        </ul>
      </div>
    </nav>
  )
}
