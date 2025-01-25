import { updateProfile } from "firebase/auth";
import { useAppContext } from "../../ContextApi/ContextApi";
import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase_config/firebase.config";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
const UpdateProfile = () => {
  const { setUpdateProfileFlag, updateProfileFlag, loggedUser, setLoading } =
    useAppContext();
  const [update, setUpdate] = useState({
    displayName: "",
    photoURL: "",
  });

  const onUpdateProfile = (e) => {
    e.preventDefault();
    try {
      updateProfile(auth.currentUser, {
        displayName: update.displayName,
        photoURL: update.photoURL,
      })
        .then(() => {
          toast.success("Update successful"),
            setTimeout(() => {
              setUpdateProfileFlag(false);
            }, 1000);
        })
        .catch(() => {
          toast.warning("Something went wrong");
        });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const onLoadData = () => {
    setUpdate({
      ...update,
      displayName: loggedUser?.displayName,
      photoURL: loggedUser?.photoURL,
    });
  };

  useEffect(() => {
    onLoadData();

    return () => onLoadData();
  }, []);
  return (
    <div
      className={`${
        !updateProfileFlag ? "hidden" : "block"
      } fixed z-50 text-white top-0 left-0 right-0 bottom-0 bg-slate-800/80`}
    >
      <div className=" container mx-auto px-5 flex flex-col items-center justify-center h-full">
        <div className=" bg-white w-full lg:w-4/6  text-black p-5 rounded-md shadow-lg relative">
          <button
            onClick={() => setUpdateProfileFlag(false)}
            className=" absolute right-5 top-5"
          >
            <IoClose size={30} />
          </button>
          <h1 className="text-xl text-center">Update Profile</h1>
          <form onSubmit={onUpdateProfile} className=" mt-5 ">
            <div className="grid max-sm:grid-cols-1 gap-5">
              <div className=" ">
                <h1>Name</h1>
                <input
                  value={update.displayName}
                  onChange={(e) =>
                    setUpdate({ ...update, displayName: e.target.value })
                  }
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="h-12 pl-2 outline-none border mt-2 w-full"
                />
              </div>

              <div className=" ">
                <h1>Photo URL</h1>
                <input
                  value={update.photoURL}
                  onChange={(e) =>
                    setUpdate({ ...update, photoURL: e.target.value })
                  }
                  type="text"
                  name="photoUrl"
                  placeholder="Enter Photo Url"
                  className="h-12 pl-2 outline-none border mt-2 w-full"
                />
              </div>
            </div>
            <div className=" flex items-center justify-center mt-5">
              <button type="submit" className=" btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
