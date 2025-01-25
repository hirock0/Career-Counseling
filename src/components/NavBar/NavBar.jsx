import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../ContextApi/ContextApi";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../lib/firebase_config/firebase.config";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
const NavBar = () => {
  const navigate = useNavigate();
  const {
    theme,
    setNavMenuFlag,
    navMenuFlag,
    loggedUser,
    profileFlag,
    setProfileFlag,
    setLoggedUser,
  } = useAppContext();

  const path = useLocation();
  const pathname = path.pathname;
  const validatePaths = pathname == "/login" || pathname == "/register";

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successful"),
          setTimeout(() => {
            navigate("/"), setProfileFlag(false);
          }, 1000),
          setLoggedUser(null);
      })
      .catch((error) => {
        return error.message;
      });
  };

  return (
    <nav
      className={` ${
        pathname == "/" && " bg-slate-900 text-white"
      }   sticky top-0 bg-base-100 z-50 h-20 flex items-center`}
    >
      <div className=" flex items-center justify-between">
        <div className=" flex items-center  ">
          <div className=" font-semibold flex text-center gap-2 max-sm:gap-0 max-sm:flex-col text-2xl max-md:text-xl max-sm:text-base">
            <h1>
              <span className=" text-green-400 text-3xl max-md:text-2xl max-sm:text-xl">
                C
              </span>
              areer
            </h1>

            <h1>
              <span className=" text-green-400 text-3xl max-md:text-2xl max-sm:text-xl">
                C
              </span>
              ounseling
              <span className=" text-yellow-400 text-3xl max-md:text-2xl max-sm:text-xl">
                .
              </span>
            </h1>
          </div>
        </div>

        <ul
          onClick={(e) => e.stopPropagation()}
          className={` flex items-center gap-5   max-md:fixed max-md:right-0 max-md:top-20   max-md:shadow-lg max-md:py-5 max-md:items-start  max-md:px-5 max-md:w-60 max-sm:w-52 max-md:flex-col ${
            !navMenuFlag ? " max-md:translate-x-full" : " max-md:translate-x-0"
          } ${
            theme
              ? "max-md:bg-base-100  max-md:text-white"
              : "  max-md:bg-white max-md:text-black"
          } max-md:transition-all `}
        >
          <NavLink
            to={"/"}
            className={
              " max-md:w-full max-md:pl-2 max-md:h-10 max-md:flex max-md:items-center max-md:bg-base-200 max-md:rounded-md max-md:shadow-md  "
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/services"}
            className={
              "max-md:w-full max-md:pl-2 max-md:h-10 max-md:flex max-md:items-center max-md:bg-base-200 max-md:rounded-md max-md:shadow-md max-md:pr-5"
            }
          >
            <li>Services</li>
          </NavLink>

          <NavLink to={"/profile"} className={" max-md:hidden"}>
            <li>My Profile</li>
          </NavLink>
          <NavLink
            to={"/specialists"}
            className={
              "max-md:w-full max-md:pl-2 max-md:h-10 max-md:flex max-md:items-center max-md:bg-base-200 max-md:rounded-md max-md:shadow-md max-md:pr-5"
            }
          >
            <li>Specialist</li>
          </NavLink>
          <li className={` md:hidden  cursor-pointer `}>
            <ThemeBtn />
          </li>
        </ul>

        <div className=" flex items-center gap-5 max-sm:gap-2 relative ">
          {!loggedUser ? (
            <Link
              to={"/login"}
              className={`${validatePaths && "hidden"}  font-semibold`}
            >
              Login
            </Link>
          ) : (
            <div
              className=" h-10 w-10 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(),
                  setProfileFlag(!profileFlag),
                  setNavMenuFlag(false);
              }}
            >
              <img
                src={loggedUser?.photoURL.toString()}
                alt={loggedUser?.displayName}
                className=" w-full h-full "
              />
            </div>
          )}

          <div
            className={` ${
              loggedUser && "hidden"
            } max-md:hidden  flex items-center justify-center cursor-pointer`}
          >
            <ThemeBtn />
          </div>
          {/* profile_popup_start */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={` ${
              !theme ? "text-black" : "text-white"
            } fixed right-0 bg-base-100 shadow-lg rounded-bl pt-5 top-20 pb-10 px-5  ${
              !profileFlag ? "translate-x-full" : "translate-x-0"
            } transition-all flex flex-col justify-between`}
          >
            <ul className={`${theme && "text-black"} flex flex-col gap-5`}>
              <NavLink
                to={"/profile"}
                className={
                  " md:hidden border pl-5 h-10 flex items-center rounded-full bg-zinc-100 shadow-lg hover:scale-95 active:bg-zinc-200 "
                }
              >
                <li>My Profile</li>
              </NavLink>
              <span
                to={""}
                className={
                  " border pl-5 h-10 flex items-center rounded-full bg-zinc-100 shadow-lg hover:scale-95 active:bg-zinc-200"
                }
              >
                <li>Pages</li>
              </span>
              <span
                className={
                  " border pl-5 h-10 flex items-center rounded-full bg-zinc-100 shadow-lg hover:scale-95 active:bg-zinc-200"
                }
              >
                <li>Analysis</li>
              </span>
            </ul>
            {loggedUser && (
              <button
                className={`${
                  theme && "text-black"
                } tooltip mt-5 flex  p-2 w-52 max-md:w-48 max-sm:w-32 h-10 border pl-5 items-center rounded-full bg-zinc-100 shadow-lg hover:scale-95 active:bg-zinc-200`}
                data-tip="Logout"
                onClick={() => {
                  onLogout();
                }}
              >
                <IoIosLogOut size={25} color="red" />
                <span>Logout</span>
              </button>
            )}
            <div
              className={`${
                theme && "text-black"
              }  max-md:hidden mt-5 border pl-5 items-center rounded-full bg-zinc-100 shadow-lg hover:scale-95 active:bg-zinc-200 h-10 `}
            >
              <ThemeBtn />
            </div>
          </div>

          {/* profile_popup_end */}

          <button
            onClick={(e) => {
              e.stopPropagation(),
                setProfileFlag(false),
                setNavMenuFlag(!navMenuFlag);
            }}
            className=" md:hidden"
          >
            <IoMenuSharp size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
