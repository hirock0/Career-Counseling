import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase_config/firebase.config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useAppContext } from "../../ContextApi/ContextApi";
const ForgotPassword = () => {
  const { stateEmail, setStateEmail } = useAppContext();
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const handlePasswordReset = (e) => {
    e.preventDefault();
    setMessage("");

    try {
      sendPasswordResetEmail(auth, stateEmail)
        .then(() => {
          setMessage(true);
        })
        .catch(() => {
          toast.warning("Something went wrong");
        });
    } catch (err) {
      toast.warning(`${err.message.toString()}`);
    }
  };

  return (
    <main className="bg-base-300 ">
      <div className=" min-h-screen container mx-auto px-5 flex justify-center items-center">
        <Link
          to={"/"}
          className=" flex flex-col items-center absolute top-10 left-10 font-semibold "
        >
          <span>Home</span>
          <IoMdArrowRoundBack />
        </Link>
        <div className="card w-full max-w-sm shadow-lg bg-base-100">
          <div className="card-body">
            <h2 className="card-title text-center">Forgot Password</h2>
            <form onSubmit={handlePasswordReset}>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input input-bordered shadow-md"
                  value={stateEmail}
                  onChange={(e) => setStateEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mt-4">
                <button
                  disabled={message}
                  type="submit"
                  className={`${
                    message
                      ? "opacity-70"
                      : "opacity-100 hover:bg-slate-300 shadow-md active:bg-slate-400"
                  } bg-slate-200 h-12 rounded-md  w-full`}
                >
                  Reset Password
                </button>
              </div>
            </form>
            {message && (
              <div className="alert bg-base-300 mt-4">
                {!message ? null : (
                  <div className=" flex items-center gap-5 ">
                    <h1>Please check your email</h1>
                    <button
                      onClick={() =>
                        setTimeout(() => {
                          navigate("/login");
                        }, 2000)
                      }
                      className="text-blue-500 font-semibold"
                    >
                      <Link to={"https://mail.google.com/"} target="_blank">
                        Email
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
