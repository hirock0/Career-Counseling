import { Link } from "react-router-dom";
import { useAppContext } from "../../ContextApi/ContextApi";
const Specialists = () => {
  const { specialists } = useAppContext();
  return (
    <div className=" bg-gray-100 py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
          Meet Our Specialists
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists?.map((specialist, index) => (
            <div
              key={index}
              className="card shadow-xl hover:shadow-2xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={specialist.id * 100}
            >
              <figure>
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="rounded-t-xl w-full h-96 object-contain"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{specialist.name}</h2>
                <p className="text-gray-600">{specialist.expertise}</p>
                <p className="text-blue-500 mt-2">{specialist.contact}</p>
                <div className="card-actions mt-4">
                  <Link
                    to={`/specialist_details/${specialist._id}`}
                    className="btn btn-primary w-full"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-10">
          <h1 className=" text-center font-semibold text-4xl max-md:text-3xl max-sm:text-2xl">
            Why Choose Us?
          </h1>
          <ul className=" mt-5 space-y-5 list-disc list-inside">
            <li
              data-aos="fade-up"
              className=" flex gap-2 p-5 bg-base-100 rounded-lg shadow-lg"
            >
              <strong className=" text-nowrap">Proven Track Record:</strong>
              <p>
                Hundreds of students and professionals have achieved their goals
                with our help
              </p>
            </li>
            <li
              data-aos="fade-up"
              className=" flex gap-2 p-5 bg-base-100 rounded-lg shadow-lg"
            >
              <strong className=" text-nowrap">Accessible Services: </strong>
              <p>
                Affordable and flexible counseling sessions to fit your schedule
                and budget.
              </p>
            </li>
            <li
              data-aos="fade-up"
              className=" flex gap-2 p-5 bg-base-100 rounded-lg shadow-lg"
            >
              <strong className=" text-nowrap">Collaborative Approach: </strong>
              <p>
                We work closely with schools, universities, and corporations to
                create holistic career development solutions.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
