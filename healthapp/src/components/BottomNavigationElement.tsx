import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { HomeSharp } from "@mui/icons-material";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import Paper from "@mui/material/Paper";
import LeftDrawer from "./LeftDrawer";
import "./BottomNavigationElement.css";

const BottomNavigationElement = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
    <div className="bottomNavigation">
      <Box sx={{ width: 400 }}>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Home"
              onClick={() => {
                navigate("/");
              }}
              icon={<HomeSharp />}
            />
            <BottomNavigationAction
              label="Bookings"
              // action={navigate("/Bookings")}
              icon={<CalendarMonthRoundedIcon />}
              onClick={() => {
                navigate("/Booking");
              }}
            />
            <BottomNavigationAction
              label="My Report"
              onClick={() => {
                navigate("/MyReport");
              }}
              icon={<SummarizeRoundedIcon />}
            />
            <BottomNavigationAction
              label="Support"
              onClick={() => {
                navigate("/");
              }}
              icon={<SupportAgentRoundedIcon />}
            />
            <div className="bottomDrawer">
              <LeftDrawer />
            </div>
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
};

export default BottomNavigationElement;
