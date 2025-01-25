import { Link } from "react-router-dom";
const ServiceCard = ({ item, flag }) => {
  return (
    <div
      data-aos={`${flag !== "HomePage" ? "fade-up" : null} `}
      className={`  max-md:w-full p-5  rounded-lg border border-gray-200 shadow-md overflow-hidden bg-base-100}`}
    >
      <img
        src={item?.image_url}
        alt={item?.service_name}
        className={` h-60 max-md:h-96 max-sm:h-fit w-full  object-cover`}
      />
      <div class="px-4 pb-8 mt-5 flex flex-col justify-between  md:h-72">
        <div className="">
          <h2 className="text-lg font-semibold ">{item?.service_name}</h2>
          <p className="text-sm text-gray-600 mt-1">{item?.description}</p>
          <div className="mt-3 text-sm text-gray-500">
            <p>
              <strong>Category:</strong> {item?.category}
            </p>
            <p>
              <strong>Duration:</strong> {item?.duration}
            </p>
            <p>
              <strong>Date:</strong> {item?.datefield}
            </p>
            <p>
              <strong>Counselor:</strong> {item?.counselor}
            </p>
            <p>
              <strong>Price:</strong> ${item?.pricing} per session
            </p>
          </div>
        </div>

        <div className="mt-4  flex items-center justify-between">
          <span className="flex items-center text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27l-5.18 2.73 1-5.82-4.24-4.13 5.85-.85 2.61-5.29 2.61 5.29 5.85.85-4.24 4.13 1 5.82z"></path>
            </svg>
            <span className="ml-1 text-sm">{item?.rating}</span>
          </span>
          <Link
            to={`/details/${item?._id}`}
            className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
