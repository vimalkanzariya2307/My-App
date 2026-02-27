function Sidebar() {
  return (
    <aside className="w-60 bg-gray-800 text-white min-h-screen p-4">
      <ul className="space-y-4">
        <li className="hover:text-yellow-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-yellow-400 cursor-pointer">Profile</li>
        <li className="hover:text-yellow-400 cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
