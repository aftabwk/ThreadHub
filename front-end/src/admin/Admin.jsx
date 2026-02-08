import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import Drawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateProductForm from "./componants/CreateProductForm";
import ProductsTable from "./componants/ProductsTable";
import OrderTable from "./componants/OrderTable";
import CustomerTable from "./componants/CustomerTable";
import Dashboard from "./componants/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import { logout } from "../state/auth/Action";
import { useDispatch } from "react-redux";

const menu = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <InventoryIcon /> },
  // { name: "Customers", path: "/admin/customers", icon: <PeopleIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <AssignmentTurnedInIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <AddBoxIcon />,
  },
];
const Admin = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const drower = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>
      <List>
        <ListItem disablePadding onClick={handleLogout}>
          <ListItemButton>
            <ListItemIcon>
              {/* <AccountCircleIcon /> */}
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
            {/* <ListItemText>Account</ListItemText> */}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <div className="flex h-screen">
        <CssBaseline />
        <div className="w-[15%] h-full border border-r-gray-300">{drower}</div>
        <div className="w-[85%] h-full">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route
              path="/product/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrderTable />}></Route>
            <Route path="/customers" element={<CustomerTable />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
