import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="nav">
    <h1 className="title">Math Magicians</h1>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <hr />
      <li>
        <Link to="calculator">Calculator</Link>
      </li>
      <hr />
      <li>
        <Link to="quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
