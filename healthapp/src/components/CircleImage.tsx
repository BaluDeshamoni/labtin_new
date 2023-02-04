import { useNavigate } from "react-router-dom";
import "./CircleImage.css";
import Avatar from "@mui/material/Avatar";
import { stringAvatar } from "./Avatar";

const CircleImage = (props: any) => {
  const navigate = useNavigate();
  return (
    <div
      className="selfCheck_icons"
      onClick={() => props.type == "menu" && navigate(`/scroll/${props.id}`)}
    >
      <div className="selfCheck_circle">
        {props.name ? (
          props.image ? (
            <img src={props.image} alt="" />
          ) : (
            <Avatar {...stringAvatar(props.name)} />
          )
        ) : (
          <img src="/imgs/person.jpg" alt="" />
        )}
      </div>
      {props.name ? (
        <h3>{props.name}</h3>
      ) : (
        <h3 onClick={() => navigate("/login")}>Login/sign Up</h3>
      )}
    </div>
  );
};

export default CircleImage;
