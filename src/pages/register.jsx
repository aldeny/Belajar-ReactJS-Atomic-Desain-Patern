import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" describe="Silahkan register terlebih dahulu">
      <FormRegister />
      <p className="mt-4 text-sm text-center">
        Sudah punya akun?
        <Link to="/" className="text-blue-600 font-bold">
          {" "}
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
