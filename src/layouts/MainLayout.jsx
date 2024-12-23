import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import AsideL from "../components/Main/AsideL";
import { useEffect } from "react";
const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <div className="app">
      <Header />
      <main>
        <AsideL />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
