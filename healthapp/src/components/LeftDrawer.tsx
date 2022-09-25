import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HeaderOptions from "./HeaderOptions";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CircleImage from "./CircleImage";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CloseIcon from "@mui/icons-material/Close";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import "./LeftDrawer.css";
import { Link } from "react-router-dom";
import Tick from "../image/21.png";
import { log } from "console";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const admin = true;

  const handleModal = () => {
    const modal = document.querySelector(".menuModal");
    const header: any = document.querySelector(".header_div");
    header.style.display = "none";

    modal?.classList.add("activeModal");
  };
  const handleCross = () => {
    const modal = document.querySelector(".menuModal");
    const header: any = document.querySelector(".header_div");
    header.style.display = "block";

    modal?.classList.remove("activeModal");
  };

  React.useEffect(() => {
    handleCross();
  });

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      {/* <CircleImage image={Tick} name="Surya Thambiereddy" /> */}
      <div className="selfCheck_icons_modal">
        <div className="selfCheck_circle_modal">
          <img src={Tick} alt="" />
        </div>
        <h3>Surya Thambiereddy</h3>
      </div>
      <div className="sidebar_menu">
        <Link to="/">
          <div className="sidebar_icons">
            <HomeIcon /> <span className="icon_name">Home</span>
          </div>
        </Link>
        {
          admin ?
            <Link to="/dashboard">
              <div className="sidebar_icons">
                <CalendarMonthIcon /> <span className="icon_name">Dashboard</span>
              </div>
            </Link>
            :
            <>
              <Link to="/Booking">
                <div className="sidebar_icons">
                  <CalendarMonthIcon /> <span className="icon_name">My Bookings</span>
                </div>
              </Link>
              <Link to="/MyReports">
                <div className="sidebar_icons">
                  <SummarizeRoundedIcon />{" "}
                  <span className="icon_name">My Reports</span>
                </div>
              </Link>
              <Link to="/Address">
                <div className="sidebar_icons">
                  <LocationOnRoundedIcon /> <span className="icon_name">Address</span>
                </div>
              </Link>
              <Link to="/Offers">
                <div className="sidebar_icons">
                  <LocalOfferIcon /> <span className="icon_name">Offers</span>
                </div>
              </Link>
              <Link to="/Help">
                <div className="sidebar_icons">
                  <HelpIcon /> <span className="icon_name">Help</span>
                </div>
              </Link>
            </>
        }
        <Link to="/Logout">
          <div className="sidebar_icons">
            <LogoutIcon /> <span className="icon_name">Logout</span>
          </div>
        </Link>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <HeaderOptions
          Icon={MenuRoundedIcon}
          Title="Menu"
          onClick={handleModal}
        />
      </React.Fragment>
      <div className="menuModal">
        <CloseIcon
          fontSize="large"
          className="closeIcon"
          onClick={handleCross}
        />
        {list("bottom")}
      </div>
    </div>
  );
}
