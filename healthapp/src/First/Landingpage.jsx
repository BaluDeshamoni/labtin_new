import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import CircleImage from "../components/CircleImage";
import LabTestCards from "../components/LabTestCards";
import { useNavigate } from "react-router-dom";
import FirstIconFirst from "../image/FreeSample.png";
import FirstIconSecond from "../image/firstIcon-2.png";
import FirstIconThird from "../image/firstIcon-3.png";
import secondFirst from "../image/secondfirst.png";
import secondIcon from "../image/secondsecond.png";
import DSlider from "../components/DSlider";
import Crousel from "../components/Crousels/Crousel";
import MobileCrousel from "../components/Crousels/MobileCrousel";
import { useDispatch, useSelector } from "react-redux";
import { getScrollmenus } from "../actions/appearanceActions";
import { Snackbar } from "@mui/material";

const Landingpage = () => {
  const { scrollmenuList } = useSelector((state) => state.scrollmenus);
  const { filter } = useSelector((state) => state.filter);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToPackages = () => {
    navigate(`/BookingPackages`, {
      state: { name: "HealthPakages" },
    });
  };
  const navigateToHealth = () => {
    navigate(`/BookingPackages`, {
      state: { name: "Scan&Imaging" },
    });
  };

  const navigateToRadiology = () => {
    navigate("/Radiology");
  };

  useEffect(() => {
    dispatch(getScrollmenus());
  }, [dispatch]);
  const handlenav1 = (e) => {
    e.preventDefault();
    navigate(`/BookingPackages`, {
      state: { name: "HealthPakages" },
    });
  };
  const handlenav2 = (e) => {
    e.preventDefault();
    navigate(`/BookingPackages`, {
      state: { name: "IndividualTests" },
    });
  };

  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const [cart, setCart] = useState(new Map());
  const { vertical, horizontal, open } = state;

  const handle = () => {
    const arr = [];
    for (const x of cart.values()) {
      arr.push(x.availableIn.map((m) => m.lab));
    }
    console.log(arr, "abcd");
    const result = arr.reduce((a, b) => a.filter((c) => b.includes(c)));
    console.log(result);
    result.length > 0
      ? navigate("/selectlab", {
          state: { data: cart, avail_labs: result },
        })
      : alert("Combination is not available");
  };
  const action = (
    <div
      className="checkoutButton"
      onClick={() =>
        cart.size == 1
          ? navigate("/selectlab", { state: { data: cart } })
          : handle()
      }
    >
      Show Labs
    </div>
  );

  return (
    <div className="landing_div">
      <div className="firstForDesktop">
        <div className="first_section">
          <div className="first_section_heading">
            <div>
              <h2 className="headingfirst" style={{ color: "#000C83" }}>
                Get Sample Collected,{" "}
              </h2>
              <h2 className="headingfirst" style={{ color: "white" }}>
                In just 45 <span style={{ fontStyle: "italic" }}>MINUTES</span>
              </h2>
            </div>

            <button className="buttonStyle1">BOOK NOW</button>
          </div>
          <div className="iconWithLable">
            <div className="Section_Icon">
              <img src={FirstIconFirst} alt="At Work Or AT Home" />
              <img src={FirstIconSecond} alt="" />
              <img src={FirstIconThird} alt="" />
            </div>
          </div>
        </div>
        <div className="second_section">
          <div className="secondsection_first" onClick={navigateToPackages}>
            <h2 className="mobileElement">Health Packages</h2>
            <div className="text_blue desktopElement">Upto 50% off</div>

            <div className="secondsection_subflex">
              <div className="subflex_icon">
                <img src={secondFirst} alt="" />
              </div>
              <div className="subflex_text">
                <h2 className="desktopElement">Health Packages</h2>
                <div className="text_blue mobileElement">Upto 50% off</div>
                <h4>2000+ TESTS</h4>
                <h4>NABL & ICMR</h4>
                <h4>APPROVED LABS</h4>
              </div>
            </div>
          </div>

          <div className="secondsection_Second" onClick={navigateToHealth}>
            <h2 className="mobileElement">Health Scans & Imagings</h2>
            <div className="text_blue desktopElement">Upto 30% off</div>
            <div className="secondsection_subflex">
              <div className="subflex_icon">
                {" "}
                <img src={secondIcon} alt="" />
              </div>
              <div className="subflex_text">
                <h2 className="desktopElement">Health Scans & Imagings</h2>
                <div className="text_blue mobileElement">Upto 30% off</div>
                <h4>Advanced &</h4>
                <h4>Affordable Radiology</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third_section mobileElement">
        <MobileCrousel />
      </div>
      <div className="third_section desktopElement">
        <DSlider />
      </div>

      <div className="fourth_section">
        <div className="fourth_section_heading">Most Common Self Checks</div>
        <div className="SelfCheck_slider">
          {scrollmenuList.map((m) => (
            <CircleImage name={m.title} image={m.icon} type="menu" id={m._id} />
          ))}
        </div>
      </div>
      <div className="fifth_section">
        <div className="fifth_section_heading">
          Most Commonly Booked Tests{" "}
          <button onClick={handlenav2}>see more</button>
        </div>
        <div className="labtest_cards_list desktopElement">
          <Crousel
            crousalData="Tests"
            loc={filter}
            cart={cart}
            setCart={setCart}
            state={state}
            setState={setState}
          />
          <Snackbar
            sx={{ marginBottom: "5rem" }}
            className="snackbar"
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            message={`${cart.size} item in Cart`}
            action={action}
            key={vertical + horizontal}
          />
        </div>
        <div className="labtest_cards_list mobileElement">
          <LabTestCards
            heading="Tyroid Profile"
            requirement="10-12 Hr fasting is Required"
            offPercentage="30"
            description="Tyroid Profile Total, Including measuring the levels of "
            previousPrice="699"
            currentPrice="250"
            diagnostics="2"
          />
          <LabTestCards
            heading="Tyroid Profile"
            requirement="10-12 Hr fasting is Required"
            offPercentage="30"
            description="Tyroid Profile Total, Including measuring the levels of "
            previousPrice="699"
            currentPrice="250"
            diagnostics="2"
          />
        </div>
      </div>
      <div className="fifth_section">
        <div className="fifth_section_heading">
          Most Commonly Booked Pakages{" "}
          <button onClick={handlenav1}>see more</button>
        </div>
        <div className="labtest_cards_list desktopElement">
          <Crousel
            crousalData="pakages"
            loc={filter}
            cart={cart}
            setCart={setCart}
            state={state}
            setState={setState}
          />
          <Snackbar
            sx={{ marginBottom: "5rem" }}
            className="snackbar"
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            message={`${cart.size} item in Cart`}
            action={action}
            key={vertical + horizontal}
          />
        </div>
        <div className="labtest_cards_list mobileElement">
          <LabTestCards
            heading="Tyroid Profile"
            requirement="10-12 Hr fasting is Required"
            offPercentage="30"
            description="Tyroid Profile Total, Including asfdjkaldsjflakdsf adsjfasjf dasdjfslmeasuring the levels of "
            previousPrice="699"
            currentPrice="250"
            diagnostics="2"
          />
          <LabTestCards
            heading="Tyroid Profile"
            requirement="10-12 Hr fasting is Required"
            offPercentage="30"
            description="Tyroid Profile Total, Including asfdjkaldsjflakdsf adsjfasjf dasdjfslmeasuring the levels of "
            previousPrice="699"
            currentPrice="250"
            diagnostics="2"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
