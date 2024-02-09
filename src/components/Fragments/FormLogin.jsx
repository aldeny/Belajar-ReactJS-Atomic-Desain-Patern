import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        name="username"
        type="text"
        placeholder="Email"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*******"
      />
      <Button classAdd="bg-blue-500 hover:bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
