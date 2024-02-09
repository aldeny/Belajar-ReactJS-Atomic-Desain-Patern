import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts
      title="Register"
      describe="Silahkan register terlebih dahulu"
      type="register"
    >
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
