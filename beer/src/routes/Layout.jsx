import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>

          <p className="text-xl font-bold text-blue-500 text-center">
            <Link to="/"> Go home </Link>
          </p>

      <Outlet />
    </div>
  );
};

