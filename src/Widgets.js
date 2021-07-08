import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>;
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Reactjs is dope","TOP-NEWS - 9086 readers")}
      {newsArticle("Coronavirus: Pakistan Updates","TOP-NEWS - 2456 readers")}
      {newsArticle("Tesla hit new highs","Cars & Auto - 2289 readers")}
      {newsArticle("BitCoin breaks $14k","Crypto - 2149 readers")}
      {newsArticle("Is redux good?","code - 229 readers")}
      {newsArticle("NEW NEXTJS is dope","TOP-NEWS - 4491 readers")}
    </div>
  );
}

export default Widgets;
