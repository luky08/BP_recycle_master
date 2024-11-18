import React from "react";
import "./Tabs.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <div
        className={`tab ${activeTab === "sorting" ? "active" : ""}`}
        onClick={() => setActiveTab("sorting")}
      >
        Třídírna
      </div>
      <div
        className={`tab ${activeTab === "manufacture" ? "active" : ""}`}
        onClick={() => setActiveTab("manufacture")}
      >
        Výrobna
      </div>
      <div
        className={`tab ${activeTab === "storage" ? "active" : ""}`}
        onClick={() => setActiveTab("storage")}
      >
        Sklad
      </div>
    </div>
  );
};

export default Tabs;
