import { useEffect } from "react";
import "../../App.css";
import "../../Dashboard/Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import "./MyInfo.css";
import { getMyOrders } from "../../actions/orderActions";

const MyReports = () => {
  const dispatch = useDispatch();

  const { myOrders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);
  console.log(myOrders);
  return (
    <div className="myBookings">
      {myOrders.map((ord, index) => (
        <div className="orderSummary_box">
          {ord.uploadedFiles && (
            <div className="myReports">
              <div className="report_order">order 00{index + 1}</div>
              <div className="reports_info">
                <div className="left">
                  <img
                    alt="Logo"
                    src={ord.uploadedFiles.report}
                    style={{
                      width: "4rem",
                      height: "4rem",
                      border: "1px solid grey",
                      bgcolor: "purple",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="right">
                  <p>{ord.orderedItem.item}</p>
                  <div className="report_but">
                    <div
                      className="rep_button"
                      onClick={() => {
                        fetch(ord.uploadedFiles.report).then((response) => {
                          response.blob().then((blob) => {
                            const fileURL = window.URL.createObjectURL(blob);
                            let alink = document.createElement("a");
                            alink.href = fileURL;
                            alink.download = "Report.pdf";
                            alink.click();
                          });
                        });
                      }}
                    >
                      <p>Download Report</p>
                    </div>
                    <div
                      className="rep_but"
                      onClick={() => {
                        fetch(ord.uploadedFiles.eReport).then((response) => {
                          response.blob().then((blob) => {
                            const fileURL = window.URL.createObjectURL(blob);
                            let alink = document.createElement("a");
                            alink.href = fileURL;
                            alink.download = "Ereport.pdf";
                            alink.click();
                          });
                        });
                      }}
                    >
                      <p>Smart Report</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyReports;
