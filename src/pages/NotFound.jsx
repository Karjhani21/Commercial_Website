import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <br />

      <Link to="/">Go Back Home</Link>

    </div>
  );
}

export default NotFound;