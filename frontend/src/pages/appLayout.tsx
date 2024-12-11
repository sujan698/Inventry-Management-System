import { Outlet } from "react-router";
import Header from "../pages/Header/Header";
import Sidebar from "../components/sideBar";

export default function AppLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header />
        <div style={{ padding: 16 }}>
          <Outlet />
        </div>
      </div>
    </div>
  ); 
}
