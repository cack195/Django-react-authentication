import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
      <div>
        <h1>Welcome to the website</h1>
        <div>
          {user ? (
            <>
              {/* <Link to="/">
                <button>go to Home</button>
              </Link>
              <br></br> */}
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
                </Link>
              <Link to="/register">
                              <button>Register</button>
                              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
