import { useParams } from "react-router-dom";
import { useAppContext } from "../../ContextApi/ContextApi";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import CommentsAndFeedBack from "../../components/CommentsAndFeedBack/CommentsAndFeedBack";
const Details = () => {
  const navigate = useNavigate();
  const { servicesCardData, loading } = useAppContext();
  const params = useParams();
  const id = params?.id || "";
  if (loading) {
    return <Loading />;
  }
  const filterData = servicesCardData?.filter((Details) => Details._id === id);
  const Details = filterData[0];

  return (
    <main className=" bg-base-200">
      <div className="">
        <section>
          <div className=" flex justify-center p-5">
            <div className=" relative   bg-base-100 rounded-lg shadow-md w-full  p-10">
              <div className=" ">
                <button
                  onClick={() => navigate("/services")}
                  className=" absolute left-5 top-2"
                >
                  <IoArrowBackSharp size={25} />
                </button>
                <h1 class=" text-center text-4xl max-md:text-3xl max-sm:text-2xl font-semibold ">
                  {Details?.service_name}
                </h1>
              </div>

              {/* ---------------- */}
              <div className="flex mt-5 items-center justify-center max-lg:flex-col gap-5 w-full ">
                <div className=" h-96 max-lg:h-80 max-md:h-72 max-sm:h-52 ">
                  <img
                    src={Details?.image_url}
                    alt={Details?.service_name}
                    className=" w-full h-full object-contain rounded-md shadow-lg"
                  />
                </div>
                <div className=" w-1/2 max-lg:w-full">
                  <p className=" max-sm:text-sm">{Details?.morDescription}</p>
                </div>
              </div>
              {/* -------------- */}
              <div className=" flex justify-center">
                <div className=" w-full">
                  <div class="mt-3 text-sm w-full text-gray-500 flex justify-around max-md:flex-col gap-2 ">
                    <div className="">
                      <p>
                        <strong>Category:</strong> {Details?.category}
                      </p>
                      <p>
                        <strong>Duration:</strong> {Details?.duration}
                      </p>
                      <p>
                        <strong>Date:</strong> {Details?.datefield}
                      </p>
                    </div>
                    <div className="">
                      <p>
                        <strong>Counselor:</strong> {Details?.counselor}
                      </p>
                      <p>
                        <strong>Price:</strong> ${Details?.pricing} per session
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center mt-5">
                <button className=" btn btn-primary">Add Cart</button>
              </div>
              <CommentsAndFeedBack />

              {/* --------------- */}
            </div>
            {/* --------------------- */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
