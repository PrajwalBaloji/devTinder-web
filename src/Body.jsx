import { Outlet, useNavigate } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getProfile } from "./api/profile";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/slice/user";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const res = await getProfile();
    if (res.status === 401) {
      navigate("/login");
      return;
    }
    dispatch(addUser(res.data));
  };
  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
