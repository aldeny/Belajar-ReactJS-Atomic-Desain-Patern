// konsep props => properties
// props di defenisikan sebagain variabel pada function tersebut
// props juga bisa kita pecah dengan cara distructer guna ingin
const Button = (props) => {
  const { children, classAdd, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${classAdd}`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
