import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { title, children, describe, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl mb-2 font-bold tracking-wide text-center text-blue-600">
          {title}
        </h1>
        <p className="text-sm mb-2 text-slate-600 font-medium tracking-wide text-center">
          {describe}
        </p>
        <hr className="border-sky-600 mb-8" />
        {children}
        <NavBottom type={type} />
      </div>
    </div>
  );
};

// Conditional rendering
const NavBottom = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-4 text-sm text-center">
        Belum punya akun?
        <Link to="/register" className="text-blue-600 font-bold">
          {" "}
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-4 text-sm text-center">
        Sudah punya akun?
        <Link to="/" className="text-blue-600 font-bold">
          {" "}
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
