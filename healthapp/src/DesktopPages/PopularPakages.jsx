import React, { useState } from "react";
import "./PopularPakages.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useSelector } from "react-redux";

const PopularPakages = (props) => {
  const navigate = useNavigate();
  const { filter } = useSelector((state) => state.filter);

  const [message, setMessage] = useState("Book Now");
  const addToCart = (e) => {
    if (props.cart.has(props.data._id)) {
      props.cart.delete(props.data._id);
      props.cart.size > 0
        ? props.setState({ ...props.state, open: true })
        : props.setState({ ...props.state, open: false });
      setMessage("Book Now");
    } else {
      var ct = props.cart.set(props.data._id, props.data);
      props.setCart(ct);
      props.cart.size > 0
        ? props.setState({ ...props.state, open: true })
        : props.setState({ ...props.state, open: false });
      setMessage("Remove Item");
    }
  };
  console.log(props.cart, "hhh");
  const filterAvailableIn = props.data.availableIn.filter(
    (f) => f.stateName?.toLowerCase() == filter?.toLowerCase()
  );
  const discount = Math.min(...filterAvailableIn.map((m) => m.discountPrice));
  const original = Math.min(...filterAvailableIn.map((m) => m.originalPrice));
  const discount_per = Math.trunc(((original - discount) / original) * 100);
  const details = props.data.details.split(",");
  const miniDetails = details.length < 3 ? details : details.slice(0, 3);

  const [active, setActive] = useState(false);

  return (
    <div>
      <Modal
        isOpen={active}
        onRequestClose={() => setActive(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            width: 400,
            height: 300,
            zIndex: "1000",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
          },
        }}
      >
        <div className="pakage_box_know">
          <div className="pakage_details">
            <h3 className="pakagesName">{props.data.title}</h3>
            <p style={{ color: "blue", marginTop: "0.5rem " }}>
              Additional Information
            </p>

            <div className="pakage_about_know">
              <ol>
                {details.map((d) => (
                  <li>{d}</li>
                ))}
              </ol>
            </div>
          </div>

          <button className="BookNowButton" onClick={() => setActive(false)}>
            Ok Got It
          </button>
        </div>
      </Modal>
      <div className="pakage_box">
        <div className="card_offer ">Extra {discount_per}% off</div>
        <div className="pakage_details">
          <h3 className="pakagesName">{props.data.title}</h3>
          <p style={{ color: "red", fontSize: "80%", marginTop: "0.5rem " }}>
            REQUIRED FASTING
          </p>
          {props.data.parameters && (
            <p className="IPara">
              Includes : {props.data.parameters} Parameters
            </p>
          )}
          <div className="pakage_about">
            <ol className="pack_ol">
              {miniDetails.map((d) => (
                <li>{d}</li>
              ))}
            </ol>
            <button onClick={() => setActive(true)}>(Know more)</button>
          </div>
        </div>

        <div className="pakage_bottom">
          {props.type == "tests" && (
            <div className="test_available">
              <div>Available In</div>
              <div>
                {
                  props.data.availableIn.filter(
                    (f) => f.stateName?.toLowerCase() == filter?.toLowerCase()
                  ).length
                }{" "}
                Diagnostics
              </div>
            </div>
          )}
          <div className="pakage_price">
            {props.type == "tests" && (
              <div className="test_price">starts from</div>
            )}
            <div>
              <span style={{ textDecoration: "line-through", color: "red" }}>
                {original}
              </span>{" "}
              <span style={{ color: "purple" }}>₹{discount}/-</span>
            </div>
          </div>
        </div>
        <button className="BookNowButton" onClick={addToCart}>
          {message}
        </button>
      </div>
    </div>
  );
};

export default PopularPakages;
