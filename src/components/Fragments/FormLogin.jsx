import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  //Event Hendler
  const handleLogin = (e) => {
    e.preventDefault();
    //testing login dengan local storage
    //ini akan menyimpan data inputan email dan password kedalam local storage
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    //redirect ke halaman product
    window.location = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" name="email" type="text" placeholder="Email" />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*******"
      />
      <Button classAdd="bg-blue-500 hover:bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
