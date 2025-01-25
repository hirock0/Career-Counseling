import { Navigate } from "react-router-dom";
import { useAppContext } from "../ContextApi/ContextApi";
import Loading from "../components/Loading/Loading";
const PublicRoute = ({ children }) => {
  const { loggedUser, loading } = useAppContext();
  if (loading) {
    return <Loading />;
  }
  if (loggedUser) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

export default PublicRoute;
