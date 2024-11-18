import { Outlet } from "react-router-dom";
import bgImage from "@/assets/pexels-arts-1187079.jpg";
import Header from "@/components/Header";

const AppLayout = () => {
  return (
    <div className="font-poppins relative min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative">
      <Header />
      </div>
      <main className="relative z-10 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
