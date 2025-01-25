import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { Helmet } from "react-helmet-async";
import { useAppContext } from "../ContextApi/ContextApi";
import Loading from "../components/Loading/Loading";
const MainLayout = () => {
  const pathname = useLocation().pathname;
  const { loading } = useAppContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" font-poppins">
      <Helmet>
        <title>
          {pathname == "/" ? "counseling / home" : `counseling ${pathname}`}
        </title>
      </Helmet>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
