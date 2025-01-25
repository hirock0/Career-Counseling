import { Link } from "react-router-dom";
const BriefCard = ({ item, flag }) => {
  return (
    <div data-aos={`${flag === "organization" ? "fade-left" : "fade-right"}`}>
      <Link
        to={"/"}
        className=" hover:scale-95 transition-all bg-base-100 p-5 h-72 max-lg:h-80 max-md:h-full overflow-hidden rounded-lg shadow-lg flex flex-col text-center items-center"
      >
        <div data-aos="fade-up" className="">
          {item.icon}
        </div>
        <h1 className=" text-2xl max-sm:text-xl my-2 font-semibold">
          {item.title}
        </h1>
        <p className=" opacity-80">{item.descriptions}</p>
      </Link>
    </div>
  );
};

export default BriefCard;
