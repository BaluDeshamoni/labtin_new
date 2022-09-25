import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createLocation } from "../../../actions/packageActions";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";
import "./AddLocation.css";

const AddLocation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddLocation = async (e) => {
    e.preventDefault();

    dispatch(createLocation({ city: city }, navigate));
  };
  const [city, setCity] = React.useState("");
  return (
    <div className="add_package">
      <CustomLink title={"Back to Manage Location"} />
      <FormHeading>Add New Location</FormHeading>
      <form onSubmit={handleAddLocation}>
        <input
          type="text"
          name="city"
          placeholder="Location Name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="add_package_btn">
          Add Location
        </button>
      </form>
    </div>
  );
};

export default AddLocation;
