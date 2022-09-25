import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Landingpage from "./First/Landingpage";
import Booking from "./Third/Booking";
import Report from "./ReportsPage/Report";
import OrderSummary from "./OrderSummary";
import ShowLabs from "./components/ShowLabs";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  Navigate,
} from "react-router-dom";
import BottomNavigationElement from "./components/BottomNavigationElement";
import Radiology from "./HealthTests/Radiology/Radiology";
import PakagesTab from "./second/PakagesTab";
import ListPakage from "./DesktopPages/ListPakage";
import Login from "./components/Login";
import SignupPage from "./components/SignupPage";
import Fotter from "./components/Fotter";
import Dashboard from "./Dashboard/Dashboard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ManagePackage from "./Dashboard/Manage/ManagePackage/ManagePackage";
import ManageCustomers from "./Dashboard/Manage/ManageCustomers/ManageCustomers";
import SlideShow from "./Dashboard/Appearance/SlideShow/SlideShow";
import AddPackage from "./Dashboard/Manage/ManagePackage/AddPackage";
import AddBanner from "./Dashboard/Appearance/SlideShow/AddBanner";
import PrescriptionUploaded from "./Dashboard/Healthexpert/PrescriptionUploaded/PrescriptionUploaded";
import ManageEmployees from "./Dashboard/Manage/ManageEmployees/ManageEmployees";
import ManageLocation from "./Dashboard/Manage/ManageLocation/ManageLocation";
import ManageTest from "./Dashboard/Manage/ManageTests/ManageTest";
import ManageRadTests from "./Dashboard/Manage/ManageRadiologyTests/ManageRadTest";
import ManageDiscounts from "./Dashboard/Manage/ManageDiscount/ManageDiscount";
import HighlightPackages from "./Dashboard/Appearance/HighlightPackages/HighlighPackages";
import HighlightTests from "./Dashboard/Appearance/HighlightTests/HighlightTests";
import ManualOrder from "./Dashboard/Dashboard/ManualOrder/ManualOrder";
import Orders from "./Dashboard/Dashboard/Orders/Orders";
import CustomerComplaints from "./Dashboard/Healthexpert/CustomerComplaints/CustomerComplaints";
import ManagePartnerlabs from "./Dashboard/Manage/ManagePartnerLabs/ManagePartnerLabs";
import ManageRadPartners from "./Dashboard/Manage/ManageRadiologyPartners/ManageRadPartners";
import Analytics from "./Dashboard/Dashboard/Analytics/Analytics";
import AddLab from "./Dashboard/Manage/ManagePartnerLabs/AddLab";
import AddRadLab from "./Dashboard/Manage/ManageRadiologyPartners/AddRadLab";
import AddDiscount from "./Dashboard/Manage/ManageDiscount/AddDiscount";
import AddTest from "./Dashboard/Manage/ManageTests/AddTest";
import AddRadTest from "./Dashboard/Manage/ManageRadiologyTests/AddRadTest";
import AddLocation from "./Dashboard/Manage/ManageLocation/AddLocation";
import ScrollMenu from "./Dashboard/Appearance/ScrollMenu/Scrollmenu";
import AddScrollmenu from "./Dashboard/Appearance/ScrollMenu/AddScrollmenu";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="App">
      {userInfo ? (
        <BrowserRouter>
          {<Header />}
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/MyReport" element={<Report />} />
            <Route path="/Booking/data" element={<Booking />} />
            <Route path="/TestPakage" element={<PakagesTab />} />
            <Route path="/onSummary/data" element={<OrderSummary />} />
            <Route path="/Radiology" element={<Radiology />} />
            <Route path="/BookingPackages" element={<ListPakage />} />
            <Route path="/selectLab/data" element={<ShowLabs />} />

            {/* New routes  */}
            {userInfo?.isAdmin && (
              <Route path="/dashboard" element={<Dashboard />}>
                <Route
                  path="highlightPackages"
                  element={<HighlightPackages />}
                />
                <Route path="highlightTests" element={<HighlightTests />} />
                <Route path="scrollMenu" element={<ScrollMenu />} />
                <Route path="slideShow" element={<SlideShow />} />

                <Route path="analytics" element={<Analytics />} />
                <Route path="manualOrder" element={<ManualOrder />} />
                <Route path="orders" element={<Orders />} />

                <Route
                  path="customerComplaints"
                  element={<CustomerComplaints />}
                />
                <Route
                  path="prescriptionUploaded"
                  element={<PrescriptionUploaded />}
                />

                <Route path="managePackage" element={<ManagePackage />} />
                <Route path="manageCustomers" element={<ManageCustomers />} />
                <Route path="manageEmployees" element={<ManageEmployees />} />
                <Route path="manageLocation" element={<ManageLocation />} />
                <Route path="manageTest" element={<ManageTest />} />
                <Route path="manageDiscount" element={<ManageDiscounts />} />
                <Route path="manageRadTests" element={<ManageRadTests />} />
                <Route
                  path="managePartnerLabs"
                  element={<ManagePartnerlabs />}
                />
                <Route
                  path="manageRadPartners"
                  element={<ManageRadPartners />}
                />
                <Route path="addTest" element={<AddTest />} />
                <Route path="addRadTest" element={<AddRadTest />} />
                <Route path="addLab" element={<AddLab />} />
                <Route path="addRadLab" element={<AddRadLab />} />
                <Route path="addDiscount" element={<AddDiscount />} />
                <Route path="addLocation" element={<AddLocation />} />
                <Route path="addPackage" element={<AddPackage />} />
                <Route path="addBanner" element={<AddBanner />} />
                <Route path="addScrollmenu" element={<AddScrollmenu />} />
              </Route>
            )}
            {/* ...............  */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {!userInfo?.isAdmin && <Fotter />}
          {<BottomNavigationElement />}
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
