const AuthLayouts = (props) => {
  const { title, children, describe } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl mb-2 font-bold tracking-wide text-center text-blue-600">
          {title}
        </h1>
        <p className="text-sm mb-2 text-slate-600 font-medium tracking-wide text-center">
          {describe}
        </p>
        <hr className="border-sky-600 mb-8" />
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
