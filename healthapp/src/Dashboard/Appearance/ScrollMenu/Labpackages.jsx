import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../../../actions/packageActions";
import axios from "axios";

const Labpackages = ({ menu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { packageList } = useSelector((state) => state.packages);
  const [menuData, setMenuData] = useState({});
  const menu_packages = menuData.packages;
  const menu_packages_list = menu_packages?.map((d) => d.packageId);

  const remaining_packages = packageList?.filter(
    (p) => !menu_packages_list?.includes(p._id)
  );
  useEffect(() => {
    const fun = async () => {
      const { data } = await axios.get(`/appearance/scrollmenu/${menu._id}`);
      setMenuData(data);
    };
    fun();
    dispatch(getPackages());
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
              {menu_packages &&
                menu_packages.map(({ packageId, title }) => (
                  <tr>
                    <td>{title}</td>
                    <td>True</td>
                    <td
                      onClick={() =>
                        navigate("/dashboard/editScrollMenu", {
                          state: {
                            id: packageId,
                            title,
                            menu,
                            present: true,
                            type: false,
                          },
                        })
                      }
                    >
                      edit
                    </td>
                  </tr>
                ))}
              {remaining_packages &&
                remaining_packages.map(({ _id, title }) => (
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
                            type: false,
                            present: false,
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

export default Labpackages;
