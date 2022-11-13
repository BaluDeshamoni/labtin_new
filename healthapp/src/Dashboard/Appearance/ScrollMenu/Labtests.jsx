import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../../actions/testActions";
import axios from "axios";

const Labtests = ({ menu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { testList } = useSelector((state) => state.tests);
  console.log(testList);
  const [menuData, setMenuData] = useState({});
  const menu_tests = menuData.tests;
  const menu_test_list = menu_tests?.map((d) => d.testId);

  const remaining_tests = testList?.filter(
    (p) => !menu_test_list?.includes(p._id)
  );

  useEffect(() => {
    const fun = async () => {
      const { data } = await axios.get(`/appearance/scrollmenu/${menu._id}`);
      setMenuData(data);
    };
    fun();
    dispatch(getTests());
  }, [dispatch]);
  return (
    <>
      <div className="manage-package">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Present</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu_tests &&
                menu_tests.map(({ testId, title }) => (
                  <tr>
                    <td>{title}</td>
                    <td>True</td>
                    <td
                      onClick={() =>
                        navigate("/dashboard/editScrollMenu", {
                          state: {
                            id: testId,
                            title,
                            menu,
                            present: true,
                            type: true,
                          },
                        })
                      }
                    >
                      edit
                    </td>
                  </tr>
                ))}
              {remaining_tests &&
                remaining_tests.map(({ _id, title }) => (
                  <tr>
                    <td>{title}</td>
                    <td>False</td>
                    <td
                      onClick={() =>
                        navigate("/dashboard/editScrollMenu", {
                          state: {
                            id: _id,
                            title,
                            menu,
                            present: false,
                            type: true,
                          },
                        })
                      }
                    >
                      edit
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Labtests;
