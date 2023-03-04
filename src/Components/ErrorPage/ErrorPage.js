import { Link } from "react-router-dom";
import "../ErrorPage/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>404 Error</h1>
      <h2>Page Not Found</h2>
      <Link className="link" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
