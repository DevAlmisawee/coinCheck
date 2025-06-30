import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
        <div className="container">
          <a className="navbar-brand" href="#">Coin Checker</a>
          <ul className="navbar-nav">
            <li className="nav-item active bg-primary px-3 mb-2">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Header