import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LanIcon from "@mui/icons-material/Lan";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CallIcon from "@mui/icons-material/Call";
import { FaFilePrescription } from "react-icons/fa";
import { BiCommentError } from "react-icons/bi";
import { MdOutlineSlideshow } from "react-icons/md";
import { FaRainbow } from "react-icons/fa";
import { FaHighlighter } from "react-icons/fa";
import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import LabtinLogo from "../image/LabtinLogo.png";

export default function SideBar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const menuItems = (
    <div className="menu_container">
      <Box
        sx={{ width: 300, py: 5, backgroundColor: "#17203F", color: "white" }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {/* list items for dashboard section  */}
        <List>
          <h3>Dashboard</h3>
          <NavLink to="/dashboard/analytics" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AutoGraphOutlinedIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Analytics"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/orders" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Order"} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>

        {/* list items for manage section  */}
        <List>
          <h3>Manage</h3>
          <NavLink to="/dashboard/manageDiscount" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalOfferIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Manage Discount"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/manageTest" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MedicalServicesIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Manage Test"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/managePackage" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MedicalServicesIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Manage Package"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/managePartnerLabs" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MedicalServicesIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Manage Partner Labs"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/manageRadTests" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MedicalServicesIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Manage Radiology Tests"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/manageRadPartners" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MedicalServicesIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Manage Radiology Partner"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/manageCustomers" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AdminPanelSettingsIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Manage Customers"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/manageEmployees" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LanIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Manage Employees"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/manageLocation" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddLocationAltIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Manage Location"} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>

        {/* list items for health expert section */}
        <List>
          <h3>Health Expert</h3>

          <NavLink to="/dashboard/callRequest" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CallIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Call Request"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/prescriptionUploaded" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaFilePrescription style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Prescription Uploaded"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/customerComplaints" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BiCommentError style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Customer Complaints"} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>

        {/* list items for health expert section */}
        <List>
          <h3>Appearance</h3>
          <NavLink to="/dashboard/slideShow" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdOutlineSlideshow style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Slideshow"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/scrollMenu" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaRainbow style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Scroll Menu"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/highlightTests" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaHighlighter style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Highlight Tests"} />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/dashboard/highlightPackages" className="nav_link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CallIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={"Highlight Packages"} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>

        <Link to="/">
          <div className="labtin_logo">
            <img src={LabtinLogo} alt="" />
          </div>
        </Link>
      </Box>
    </div>
  );

  return (
    <>
      <div className="box_sm">
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
          {menuItems}
        </Drawer>
      </div>
      <div className="box_lg">{menuItems}</div>
    </>
  );
}
