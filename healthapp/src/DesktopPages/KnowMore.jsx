import { Close } from "@mui/icons-material";
import "./KnowMore.css";

function KnowMore(props) {
  return (
    <div className="my_modal_know">
      <div className="dialog_body_know">
        <div>
          <div className="heading_and_close">
            <div style={{ flex: "1", paddingLeft: "15px", fontSize: "larger" }}>
              Upload your Prescription
            </div>
            <div
              className="close_button"
              onClick={async () => {
                props.onClose();
              }}
            >
              <Close />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                Upload Files
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <div
              style={{
                width: "350px",
                height: "125px",
                backgroundColor: "whitesmoke",
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontSize: "small",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                Attached Prescriptions
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>Enter Your Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowMore;
