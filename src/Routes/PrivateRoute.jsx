import { Navigate } from "react-router-dom";
import { useAppContext } from "../ContextApi/ContextApi";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
const PrivateRoute = ({ children }) => {
  const path = useLocation();
  const { loggedUser, loading } = useAppContext();
  if (loading) {
    return <Loading />;
  }
  if (loggedUser) {
    return children;
  }
  if (!loggedUser) {
    return <Navigate state={path.pathname} to={"/login"} />;
  }
};

export default PrivateRoute;
