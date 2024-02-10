import Button from "../Elements/Button";

const Navbar = (props) => {
  const { userEmail } = props;
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location = "/";
  };
  return (
    <nav className="bg-blue-800">
      <div className="flex justify-between items-center container mx-auto px-4 py-4">
        <h1 className="text-xl font-bold text-white">
          Belajar <span className="text-red-400">ReactJS</span>
        </h1>
        <div>
          <ul className="flex gap-4">
            <li>
              <a
                href="/"
                className="text-white hover:text-red-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-white hover:text-red-400 transition-colors"
              >
                Products
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href=""
                className="text-white hover:text-red-400 transition-colors"
              >
                {userEmail}
              </a>
            </li>
            <li>
              <Button
                classAdd="bg-red-500 hover:bg-red-600"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
