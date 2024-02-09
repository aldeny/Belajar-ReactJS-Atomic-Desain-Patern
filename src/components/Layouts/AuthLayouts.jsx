const AuthLayouts = (props) => {
  const { title, children, describe } = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-xl mb-2 font-bold text-blue-600">{title}</h1>
      <p className="text-sm mb-8 text-slate-600 font-medium tracking-wide">
        {describe}
      </p>
      {children}
    </div>
  );
};

export default AuthLayouts;
