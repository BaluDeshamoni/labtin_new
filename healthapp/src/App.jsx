import React, { useEffect, useState } from "react";
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
  useNavigate,
  useLocation,
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
import LabsAndPackages from "./Dashboard/Manage/ManagePartnerLabs/LabsAndPackages";
import LabPackages from "./Dashboard/Manage/ManagePartnerLabs/LabPackages";
import EditPackage from "./Dashboard/Manage/ManagePartnerLabs/EditPackage";
import EditTest from "./Dashboard/Manage/ManagePartnerLabs/EditTest";
import MyAddress from "./components/MyInfo/MyAddress";
import MyOffers from "./components/MyInfo/MyOffers";
import MyBookings from "./components/MyInfo/MyBookings";
import MyReports from "./components/MyInfo/MyReports";
import UploadReports from "./Dashboard/Dashboard/Orders/UploadReports";
import ScrollTotop from "./ScrollTotop";
import Otp from "./components/MyInfo/Otp";
import ChangeStatus from "./Dashboard/Dashboard/Orders/ChangeStatus";
import RegisterUser from "./components/RegisterUser";
import AddComplaint from "./Dashboard/Healthexpert/CustomerComplaints/AddComplaint";
import LabsPack from "./Dashboard/Appearance/ScrollMenu/LabsPack";
import EditScrollMenu from "./Dashboard/Appearance/ScrollMenu/EditScrollMenu";
import AddHighlightTest from "./Dashboard/Appearance/HighlightTests/AddHighlightTest";
import AddHighlightPackage from "./Dashboard/Appearance/HighlightPackages/AddHighlightPackage";
import Search from "./components/Search/Search";
import Scroll from "./components/Scroll/Scroll";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="App">
      {userInfo ? (
        <BrowserRouter>
          {<Header />}
          <ScrollTotop>
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/filter/:loc/" element={<Landingpage />} />
              <Route path="/BookingPackages" element={<ListPakage />} />
              <Route path="/selectLab" element={<ShowLabs />} />
              <Route path="/search/:keyword" element={<Search />} />
              <Route path="/scroll/:id" element={<Scroll />} />

              <Route path="/Booking" element={<Booking />} />
              <Route path="/MyBooking" element={<MyBookings />} />
              <Route path="/MyReport" element={<MyReports />} />
              <Route path="/MyAddress" element={<MyAddress />} />
              <Route path="/MyOffers" element={<MyOffers />} />
              <Route path="/onSummary" element={<OrderSummary />} />

              <Route path="/TestPakage" element={<PakagesTab />} />
              <Route path="/Radiology" element={<Radiology />} />

              <Route path="/otp" element={<Otp />} />

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
                  <Route path="LabsPack" element={<LabsPack />} />
                  <Route path="editScrollMenu" element={<EditScrollMenu />} />
                  <Route
                    path="addHighlightTest"
                    element={<AddHighlightTest />}
                  />
                  <Route
                    path="addHighlightPackage"
                    element={<AddHighlightPackage />}
                  />

                  <Route path="LabsAndPackages" element={<LabsAndPackages />} />
                  <Route path="editPackage" element={<EditPackage />} />
                  <Route path="editTest" element={<EditTest />} />
                  <Route path="addTest" element={<AddTest />} />
                  <Route path="addRadTest" element={<AddRadTest />} />
                  <Route path="addLab" element={<AddLab />} />
                  <Route path="addRadLab" element={<AddRadLab />} />
                  <Route path="addDiscount" element={<AddDiscount />} />
                  <Route path="addLocation" element={<AddLocation />} />
                  <Route path="addPackage" element={<AddPackage />} />
                  <Route path="addBanner" element={<AddBanner />} />
                  <Route path="addScrollmenu" element={<AddScrollmenu />} />
                  <Route path="uploadReports" element={<UploadReports />} />
                  <Route path="changeStatus" element={<ChangeStatus />} />
                  <Route path="addComplaint" element={<AddComplaint />} />
                </Route>
              )}
              {/* ...............  */}

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {!userInfo?.isAdmin && <Fotter />}
            {<BottomNavigationElement />}
          </ScrollTotop>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <ScrollTotop>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Landingpage />
                  </>
                }
              />

              <Route
                path="/BookingPackages"
                element={
                  <>
                    <Header />
                    <ListPakage />
                  </>
                }
              />
              <Route
                path="/selectLab"
                element={
                  <>
                    <Header />
                    <ShowLabs />
                  </>
                }
              />

              <Route path="/login" element={<Login />} />
              <Route path="/Register" element={<SignupPage />} />
              <Route path="/RegisterUser" element={<RegisterUser />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </ScrollTotop>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
