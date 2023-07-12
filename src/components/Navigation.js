import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="calculator" >Calculator</Link>
          </li>
          <li>
            <Link to="quote" >Quote</Link>
          </li>
        </ul>
      </nav>
    )
  }

  export default Navigation;