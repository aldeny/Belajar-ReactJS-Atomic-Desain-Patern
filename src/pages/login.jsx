import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" describe="Silahkan login terlebih dahulu">
      <FormLogin />
      <p className="mt-4 text-sm text-center">
        Belum punya akun?
        <Link to="/register" className="text-blue-600 font-bold">
          {" "}
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
