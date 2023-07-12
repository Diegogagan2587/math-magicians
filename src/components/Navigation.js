import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <nav className="nav">
        <h1 className="title">Math Magicians</h1>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <hr/>
          <li>
            <Link to="calculator" >Calculator</Link>
          </li>
          <hr/>
          <li>
            <Link to="quote" >Quote</Link>
          </li>
        </ul>
      </nav>
    )
  }

  export default Navigation;