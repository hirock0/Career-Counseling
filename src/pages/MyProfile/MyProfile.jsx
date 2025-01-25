import { useAppContext } from "../../ContextApi/ContextApi";
import UpdateProfile from "../../components/UpdateProfile/UpdateProfile";

const MyProfile = () => {
  const { loggedUser, setUpdateProfileFlag } = useAppContext();

  return (
    <main className="py-5 min-h-screen bg-base-200">
      <div className="">
        <section>
          <div className=" bg-base-100 p-10 rounded-lg shadow-lg">
            <div className=" relative h-96 max-md:h-80 max-sm:h-72  border bg-red-400 ">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857_960_720.jpg"
                alt="car"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-40 h-40 max-md:w-32 max-md:h-32 max-sm:w-28 max-sm:h-28 rounded-full overflow-hidden">
                <img
                  src={loggedUser?.photoURL.toString()}
                  alt="user"
                  className=" w-full h-full"
                />
              </div>
            </div>
            <div className="  mt-2 flex">
              <button
                onClick={() => setUpdateProfileFlag(true)}
                className=" btn btn-accent"
              >
                Edit Profile
              </button>
              <div className=" w-full">
                <h1 className=" text-center text-2xl font-semibold">
                  {loggedUser?.displayName}
                </h1>
                <h1 className=" text-center font-medium">
                  {loggedUser?.email}
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <UpdateProfile />
    </main>
  );
};

export default MyProfile;
