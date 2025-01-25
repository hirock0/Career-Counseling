import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold max-sm:text-6xl animate-bounce">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl   mt-4">Page Not Found</h2>
        <p className="text-gray-400 mt-2">
          Sorry, the page you're looking for doesn't exist.
        </p>
      </div>

      <div className="mt-8">
        <Link
          to="/"
          className="bg-teal-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-teal-400 transition"
        >
          Go Back Home
        </Link>
      </div>

      <div className="mt-16">
        <img
          src="https://i.ibb.co.com/cxTchFB/space-nebula.jpg"
          alt="Lost in space"
          className="rounded-lg shadow-lg transform hover:scale-105 h-80 max-sm:h-60 transition"
        />
      </div>
    </div>
  );
};

export default ErrorElement;
