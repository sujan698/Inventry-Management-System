import { Building2, PackageOpen, ReceiptText, ShoppingCart,  UsersRound } from "lucide-react";
import { NavLink } from "react-router";
import "./sideBar.css"

export default function SideBar() {
  return (
    <div className="sidebar" style={{ backgroundColor: "#1E201E", color: "white" }}>
      <div style={{ display: "flex", height: 80, alignItems: "center"}}>
      <img src="/ims-1.svg" height={45} width="100%" />
      </div>
      <ul>
        <li>
          <NavLink to="/products" className={({ isActive }) => isActive ? "active-item" : ""}>
            <PackageOpen />
            Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales" className={({ isActive }) => isActive ? "active-item" : ""}>
            <ReceiptText />
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink to="/ads" className={({ isActive }) => isActive ? "active-item" : ""}>
             <Building2 />
            Organization
          </NavLink>
        </li>
        <li>
          <NavLink to="/ads" className={({ isActive }) => isActive ? "active-item" : ""}>
          <UsersRound />
            Customer Vendor
          </NavLink>
        </li>
        <li>
          <NavLink to="/ads" className={({ isActive }) => isActive ? "active-item" : ""}>
          <ShoppingCart />
            Purchase
          </NavLink>
        </li>
      </ul>
    </div>
  );
}