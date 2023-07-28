import "./Navbar1.css";
import "./Feedback";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar1() {
  return (
    <>
    <nav className="nav">
      <Link to="/HARISH" className="site-title">
        Hike
      </Link>
      <ul>
      {/* <CustomLink to="/Feedback">Feedback</CustomLink> */}
        <CustomLink to="/pricing">Sign In</CustomLink>
      </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    </nav>
   
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
