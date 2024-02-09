import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-5">
        <span className="text-red-500">404</span> - Page Not Found
      </h1>
      <p className="text-base font-medium text-slate-600">
        The page you are looking for does not exist.
      </p>
      <p className="text-base font-medium text-slate-600">
        Please check the URL and try again.
      </p>
      <p>{error.message || error.statusText}</p>
    </div>
  );
};

export default ErrorPage;
