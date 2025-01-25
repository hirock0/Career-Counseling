import { useParams } from "react-router-dom";
import { useAppContext } from "../../ContextApi/ContextApi";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import CommentsAndFeedBack from "../../components/CommentsAndFeedBack/CommentsAndFeedBack";

const Specialist_details = () => {
  const navigate = useNavigate();
  const { loading, specialists } = useAppContext();
  const params = useParams();
  const id = params?.id || "";

  if (loading) {
    return <Loading />;
  }
  const filterData = specialists?.filter((Details) => Details._id === id);
  const Details = filterData[0];
  return (
    <main className=" bg-base-200">
      <div className=" bg-gray-100 py-10 px-4">
        <div className="container mx-auto">
          <div
            className="card shadow-xl p-6 bg-white max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <figure>
              <img
                src={Details.image}
                alt={Details.name}
                className="rounded-lg h-96 max-md:h-80 max-sm:h-52 object-contain mb-6"
              />
            </figure>
            <h1 className="text-3xl font-bold mb-4">{Details.name}</h1>
            <p className="text-gray-700 mb-2">{Details.description}</p>
            <p className="text-gray-700 mb-2">
              <strong>Expertise:</strong> {Details.expertise}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Contact:</strong> {Details.contact}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> {Details.address}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Status:</strong> {Details.status}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Commission:</strong> {Details.commission}
            </p>
            <p className="text-gray-700">
              <strong>Related Topics:</strong> {Details.related.join(", ")}
            </p>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-accent text-white mt-6"
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Specialist_details;
