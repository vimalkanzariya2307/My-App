
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-16 bg-gray-900 text-white flex items-center justify-between px-6 gap-4">
      <span className="font-bold text-xl">MySathi</span>

      <nav className="flex gap-6">
        <a href="#" className="hover:text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">About us</a>
        <a href="#" className="hover:text-yellow-400">Contact Us</a>
        {/* <a href="/login" className="hover:text-yellow-400">Login</a> */}
        <a href="/signup" className="hover:text-yellow-400">Signup</a>

        <Link to="/login">Login</Link>
        {/* <Link to="/login" className="hover:text-yellow-400">Login</Link>
        <Link to="/signup" className="hover:text-yellow-400">Signup</Link> */}

      </nav>
    </header>
  );
}

export default Header;
