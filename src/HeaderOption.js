import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title ,onClick}) {
  const user = useSelector(state => state.user)
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
  {avatar && <Avatar className="headerOption__icon" src={avatar}>{user?.email[0]}</Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
