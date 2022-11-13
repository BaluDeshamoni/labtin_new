import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createComplaint } from "../../../actions/userActions";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";

const AddComplaint = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddComplaint = async (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(createComplaint(data, navigate));
  };
  const [data, setData] = React.useState({
    customer: "",
    number: "",
    complaint: "",
  });
  return (
    <div className="add_package">
      <CustomLink title={"Back to Manage Complaint"} />
      <FormHeading>Add New Complaint</FormHeading>
      <form onSubmit={handleAddComplaint}>
        <input
          type="text"
          name="title"
          placeholder="Customer Name"
          onChange={(e) => setData({ ...data, customer: e.target.value })}
        />
        <input
          name="number"
          type="text"
          placeholder="Mobile Number"
          onChange={(e) => setData({ ...data, number: e.target.value })}
        />
        <input
          type="text"
          name="complaint"
          placeholder="Complaint"
          onChange={(e) => setData({ ...data, complaint: e.target.value })}
        />

        <button type="submit" className="add_package_btn">
          Add Complaint
        </button>
      </form>
    </div>
  );
};

export default AddComplaint;
