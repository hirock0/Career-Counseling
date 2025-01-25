import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const LearnMoreBtn = ({ btn }) => {
  return (
    <div className=" my-5">
      <Link
        to={"/specialists"}
        className={`${
          btn == 1 ? "bg-green-600" : "bg-cyan-600 "
        } shadow-lg px-5 text-white py-3  max-sm:text-sm relative flex items-center gap-3 group font-semibold rounded-full w-fit`}
      >
        <span>Contact to Learn More</span>
        <FaArrowRightLong className=" hidden group-hover:block" />
      </Link>
    </div>
  );
};

export default LearnMoreBtn;
