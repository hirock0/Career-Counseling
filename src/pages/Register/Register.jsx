import { useForm } from "react-hook-form";
import NavBar from "../../components/NavBar/NavBar";
import { useAppContext } from "../../ContextApi/ContextApi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../lib/firebase_config/firebase.config";

const Register = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading } = useAppContext();
  const [passwordFlag, setPasswordFlag] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegister = (info) => {
    setLoading(true);
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(info.password)) {
      toast.warning("Password must have a lowercase and 6 character");
    } else {
      createUserWithEmailAndPassword(auth, info.email, info.password)
        .then((user) => {
          updateProfile(user.user, {
            displayName: info.name,
            photoURL: info.photoUrl,
          })
            .then(() => {
              toast.success("Register successful!"),
                setTimeout(() => {
                  navigate(path?.state ? path.state : "/");
                  reset();
                }, 1000);
            })
            .catch(() => toast.warning("Something went wrong"));
        })
        .catch((error) => {
          return error.message;
        });
    }
    try {
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <main className="">
      <NavBar />
      <div className="">
        <section className="h-full">
          <div className=" p-5  h-full flex max-lg:justify-center ">
            <div className=" w-1/2 max-lg:hidden p-5 max-lg:w-full max-lg:h-1/2 lg:h-full ">
              <img
                src="https://i.ibb.co.com/nfbLsyW/speed2.png"
                alt="indicate"
                className=" w-full object-contain"
                style={{ height: "calc(100vh - 110px)" }}
              />
            </div>

            {/* --------------------- */}
            <div className=" w-1/2 max-lg:w-5/6 p-5 max-sm:w-full h-full bg-base-100 rounded-lg shadow-lg">
              <h1 className=" text-center my-5 text-2xl font-semibold">
                Register Please
              </h1>
              <div className=" mb-5 flex items-center justify-end">
                <h1 className="  font-semibold">
                  Already have an account?{" "}
                  <Link to={"/login"} className=" text-blue-600">
                    Login
                  </Link>
                </h1>
              </div>
              <form onSubmit={handleSubmit((data) => onRegister(data))}>
                <div className=" ">
                  <h1 className=" ">Name</h1>
                  <input
                    {...register("name", {
                      required: "Need to fill email field",
                    })}
                    type="text"
                    name="name"
                    placeholder="  Enter your Name"
                    className=" w-full h-12 pl-2 rounded-sm outline-none  shadow-md focus:h-14 "
                  />
                  {errors.name && (
                    <h1 className="text-sm mt-2 pl-2 text-red-600">
                      {errors.name.message}
                    </h1>
                  )}
                </div>

                <div className=" mt-5">
                  <h1 className=" ">Email</h1>
                  <input
                    {...register("email", {
                      required: "Need to fill email field",
                    })}
                    type="email"
                    name="email"
                    placeholder="  Enter your Email"
                    className=" w-full h-12 pl-2 rounded-sm outline-none  shadow-md focus:h-14 "
                  />
                  {errors.email && (
                    <h1 className="text-sm mt-2 pl-2 text-red-600">
                      {errors.email.message}
                    </h1>
                  )}
                </div>

                <div className=" mt-5">
                  <h1 className=" ">Password</h1>
                  <div className=" relative flex items-center">
                    <input
                      {...register("password", {
                        required: "Need to fill password field",
                      })}
                      type={!passwordFlag ? "password" : "text"}
                      name="password"
                      placeholder=" Enter your Password"
                      className=" w-full h-12 pl-2 shadow-md  rounded-sm outline-none  focus:h-14 "
                    />
                    <div
                      className=" absolute right-2 cursor-pointer "
                      onClick={() => setPasswordFlag(!passwordFlag)}
                    >
                      <IoEye
                        size={25}
                        className={`${!passwordFlag ? "hidden" : "block"}`}
                      />
                      <IoMdEyeOff
                        size={25}
                        className={`${passwordFlag ? "hidden" : "block"}`}
                      />
                    </div>
                  </div>
                  {errors.password && (
                    <h1 className="text-sm mt-2 pl-2 text-red-600">
                      {errors.password.message}
                    </h1>
                  )}
                </div>

                <div className=" mt-5">
                  <h1 className=" ">Photo Url</h1>
                  <input
                    {...register("photoUrl", {
                      required: "Need to fill password field",
                    })}
                    type="text"
                    name="photoUrl"
                    placeholder=" Enter your Photo Url"
                    className=" w-full h-12 pl-2 shadow-md  rounded-sm outline-none  focus:h-14 "
                  />
                  {errors.photoUrl && (
                    <h1 className="text-sm mt-2 pl-2 text-red-600">
                      {errors.photoUrl.message}
                    </h1>
                  )}
                </div>

                {/* term_start */}

                <div className="">
                  <div className=" mt-5 flex items-center gap-5">
                    <input
                      {...register("checkbox", {
                        required: "Need to fill checkbox field",
                      })}
                      type="checkbox"
                      name="checkbox"
                      id=""
                    />
                    <h1>Term and conditions</h1>
                  </div>
                  {errors.checkbox && (
                    <h1 className="text-sm mt-2 pl-2 text-red-600">
                      {errors.checkbox.message}
                    </h1>
                  )}
                </div>
                {/* term_end */}

                <div className=" flex items-center justify-center mt-5">
                  <button
                    type="submit"
                    className=" h-12 bg-base-300 shadow-md rounded-lg hover:scale-95 active:bg-zinc-300 font-semibold w-full"
                  >
                    {loading ? (
                      <div className=" loading loading-ring"></div>
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
