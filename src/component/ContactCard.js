import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div
      className="item"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="content" style={{ display: "flex", justifyContent: "space-between", margin:"10px 0" }}>
        <img className="ui avatar image" src={user} alt="" width="30px" />
        <div>
          <div className="header">
            <h2>{name}</h2>
          </div>
          <div>
            <h4>{email}</h4>
          </div>
        </div>
      </div>
      <i className="trash alternate outline icon red" onClick={() => props.clickHandler(id)}></i>
    </div>
  );
};

export default ContactCard;
