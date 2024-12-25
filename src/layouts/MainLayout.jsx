import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import AsideL from "../components/Main/AsideL";
import { useEffect } from "react";
const MainLayout = () => {
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
