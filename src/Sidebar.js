import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
function Sidebar() {
  const recentItem = (topic) => {
    return <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>M DANISH</h2>
        <h4>mdanish34@email.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>View on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
        
      </div>
    </div>
  );
}

export default Sidebar;
