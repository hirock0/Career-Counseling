import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-[url(https://i.ibb.co.com/7pRDQDS/footer-bg.png)] bg-center bg-cover bg-no-repeat text-white py-10">
      <div className="">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 justify-items-center">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 max-sm:text-center">
              About Us
            </h3>
            <p className="text-gray-400">
              We are dedicated to helping individuals achieve their career goals
              through expert counseling and personalized guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 max-sm:text-center">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to={""} className="hover:text-teal-400 transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-teal-400 transition">
                  Specialists
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-teal-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-teal-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 max-sm:text-center">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="">
                  <IoCall />
                </div>

                <p>+8801700554293</p>
              </li>
              <li className="flex items-center space-x-2">
                <div className="">
                  <IoIosMail />
                </div>

                <p>hirockdutta0@gmail.com</p>
              </li>
              <li className="flex items-center space-x-2">
                <div className="">
                  <IoLocationSharp color="red" size={20} />
                </div>

                <p>Manirampur,Jashore,Khulna</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4">
            <Link
              target="_blank"
              to={"https://www.facebook.com/"}
              data-tip="facebook"
              className="tooltip bg-white hover:bg-slate-200  p-2 rounded-full flex items-center justify-center transition"
            >
              <button>
                <FaFacebookF size={25} color="blue" />
              </button>
            </Link>
            <Link
              target="_blank"
              to={"https://x.com/"}
              data-tip="twitter"
              className="tooltip bg-white hover:bg-slate-200  p-2 rounded-full flex items-center justify-center transition"
            >
              <button>
                <FaTwitter size={25} color="cyan" />
              </button>
            </Link>
            <Link
              target="_blank"
              to={"https://www.youtube.com/"}
              data-tip="youtube"
              className="bg-white tooltip hover:bg-slate-200  p-2 rounded-full flex items-center justify-center transition"
            >
              <button>
                <FaYoutube size={25} color="red" />
              </button>
            </Link>
            <Link
              target="_blank"
              to={"https://web.whatsapp.com/"}
              data-tip="whatsapp"
              className="bg-white tooltip hover:bg-slate-200  p-2 rounded-full flex items-center justify-center transition"
            >
              <button>
                <FaWhatsappSquare size={25} color="green" />
              </button>
            </Link>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0">
            &copy; 2024 Career Path. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
