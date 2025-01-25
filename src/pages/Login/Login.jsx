import { useForm } from "react-hook-form";
import NavBar from "../../components/NavBar/NavBar";
import { useAppContext } from "../../ContextApi/ContextApi";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../lib/firebase_config/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useLocation } from "react-router-dom";
const Login = () => {
  const { setLoading, loading, setStateEmail } = useAppContext();
  const [passwordFlag, setPasswordFlag] = useState(false);
  const path = useLocation();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onGoogleLogin = () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          toast.success("Login successful"),
            setTimeout(() => {
              navigate(path?.state ? path.state : "/");
              reset();
            }, 1000);
        })
        .catch((error) => {
          return error.message;
        });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const onLogin = (info) => {
    try {
      setLoading(true);
      signInWithEmailAndPassword(auth, info.email, info.password)
        .then(() => {
          toast.success("Login successful"),
            setTimeout(() => {
              navigate(path.state);
              reset();
            }, 1000);
        })
        .catch(() => {
          toast.warning("Password or Email is incorrect");
        });
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
                src="https://i.ibb.co.com/LrYFFY9/indi.png"
                alt="indicate"
                className=" w-full object-contain"
                style={{ height: "calc(100vh - 150px)" }}
              />
            </div>

            {/* --------------------- */}
            <div className=" w-1/2 max-lg:w-5/6 p-5 max-sm:w-full h-full bg-base-100 rounded-lg shadow-lg">
              <h1 className=" text-center my-5 text-2xl font-semibold">
                Login Please
              </h1>
              <form onSubmit={handleSubmit((data) => onLogin(data))}>
                <div className="">
                  <h1 className=" ">Email</h1>
                  <input
                    {...register("email", {
                      required: "Need to fill email field",
                    })}
                    type="email"
                    name="email"
                    onChange={(e) => {
                      setStateEmail(e.target.value);
                    }}
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
                      className=" absolute cursor-pointer right-2 "
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
                <div className=" flex items-center justify-center mt-5">
                  <button
                    type="submit"
                    className=" h-12 bg-base-300 shadow-md rounded-lg hover:scale-95 active:bg-zinc-300 font-semibold w-full"
                  >
                    {loading ? (
                      <div className=" loading loading-ring"></div>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>

              <div className=" my-5 flex items-center justify-center ">
                <Link
                  to={"/register"}
                  className=" flex items-center justify-center w-1/2 max-sm:w-full h-12 rounded-md shadow-lg  hover:scale-95 active:bg-zinc-300 font-semibold"
                >
                  Create a new account
                </Link>
              </div>

              <div className=" flex text-nowrap items-center justify-center">
                <div className=" w-full divider"></div>
                <h1 className=" px-4">Login With</h1>
                <div className=" w-full divider"></div>
              </div>

              <div className="  max-sm:flex-col gap-6 flex items-center justify-center">
                <button
                  onClick={onGoogleLogin}
                  className=" flex items-center justify-center h-12 rounded-sm   w-full max-sm:w-full bg-base-300 hover:scale-95 active:bg-zinc-300 font-semibold"
                >
                  <FcGoogle size={25} />
                </button>
                <button className=" flex items-center justify-center h-12 rounded-sm   w-full max-sm:w-full bg-base-300 hover:scale-95 active:bg-zinc-300 font-semibold">
                  <SiGithub color="blue" size={25} />
                </button>
              </div>
              <div className=" mt-5 flex items-center justify-end">
                <Link
                  to={"/forgot_password"}
                  className=" text-blue-600 font-semibold"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
