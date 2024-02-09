// konsep props => properties
// props di defenisikan sebagain variabel pada function tersebut
// props juga bisa kita pecah dengan cara distructer guna ingin
const Button = (props) => {
    const {children = "...", variant = "bg-black"} = props;
    return (
      <button className={`h-10 px-6 font-semibold rounded-md text-white ${variant}`}>
        {children}
      </button>
    )
  }

  export default Button