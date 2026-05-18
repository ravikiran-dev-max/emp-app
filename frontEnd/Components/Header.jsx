import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-linear-to-r from-gray-900 via-indigo-800 to-blue-700 shadow-lg">
      {/* Logo / Title */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-extrabold text-indigo-300 tracking-wide">
          Employees
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-lg font-semibold text-white">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-red-400 border-b-2 border-red-400 pb-1"
              : "hover:text-yellow-300 transition"
          }
        >
          Home
        </NavLink>

        {/* Create Employee */}
        <NavLink
          to="/create-emp"
          className={({ isActive }) =>
            isActive
              ? "text-red-400 border-b-2 border-red-400 pb-1"
              : "hover:text-yellow-300 transition"
          }
        >
          Create Employee
        </NavLink>

        {/* Employees */}
        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive
              ? "text-red-400 border-b-2 border-red-400 pb-1"
              : "hover:text-yellow-300 transition"
          }
        >
          Employees
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
