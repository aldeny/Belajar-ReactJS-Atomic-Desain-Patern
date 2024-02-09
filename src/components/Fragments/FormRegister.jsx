import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="Insert your fullname"
      />
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
      <Button classAdd="bg-blue-500 hover:bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
