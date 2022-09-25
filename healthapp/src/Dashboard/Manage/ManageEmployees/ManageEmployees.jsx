import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../../actions/employeeActions";
import { usersList } from "../../../actions/userActions";
import EmployeeRow from "./EmployeeRow";

const ManageEmployees = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userList);
  const employees = users.filter((u) => u.isEmployee);
  console.log(employees);

  useEffect(() => {
    dispatch(usersList());
  }, [dispatch]);

  return (
    <div className="manage-package">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => <EmployeeRow employee={employee} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEmployees;
