const Label = (props) => {
  const { children, htmlFor } = props;

  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 font-bold text-base text-slate-700"
    >
      {children}
    </label>
  );
};

export default Label;
