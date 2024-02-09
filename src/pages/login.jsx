import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts
      title="Login"
      describe="Silahkan login terlebih dahulu"
      type="login"
    >
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
