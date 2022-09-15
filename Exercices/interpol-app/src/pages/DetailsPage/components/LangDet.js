import React from "react";
import "./LangDet.css";

const LangDet = ({ content }) => {
  return (
    <div className="labelContainer">
      {content?.map((langSpoken, key) => {
        return (
          <span key={key} className="langSpoken">
            {langSpoken === "SPA"
              ? "Spanish"
              : langSpoken === "POR"
              ? "Portuguese"
              : langSpoken === "ENG"
              ? "English"
              : langSpoken === "FRE"
              ? "French"
              : langSpoken === "ITA"
              ? "Italian"
              : langSpoken === "NED"
              ? "Dutch"
              : langSpoken === "RUS"
              ? "Russian"
              : langSpoken === "CHN"
              ? "Chinese"
              : langSpoken === "ROU"
              ? "Romanian"
              : langSpoken === "MOL"
              ? "Moldavian"
              : "unknown"}
          </span>
        );
      })}
    </div>
  );
};

export default LangDet;
