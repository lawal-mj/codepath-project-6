import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>

          <p>
            <Link to="/"> Go home </Link>
          </p>

      <Outlet />
    </div>
  );
};

