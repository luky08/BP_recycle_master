import React from "react";
import "./SortingStation.css";
import InventoryList from "../components/InventoryList.js";

const SortingStation = () => {
  return (
    <div className="sorting-station content">
      <div className="left-section">
        <div className="main-row">
          <div className="left">
            <img src="/img/popelar-celej.png" alt="Převoz odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>lvl1 - Převoz odpadu do třídírny</div>
              <div>5 kg - 3 min</div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="right">
            <img src="/img/upgrade-text.png" alt="Upgrade" />
            <div className="price"> 25 kč</div>
          </div>
        </div>
        <div className="main-row text"> Připraveno 32 kg</div>
        <div className="main-row">
          <div className="left">
            <img src="/img/tridicka.png" alt="Třídění odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>lvl2 - Třídění odpadu na plast, sklo a papír</div>
              <div>3 kg - 3 min</div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="right">
            <img src="/img/upgrade-text.png" alt="Upgrade" />
            <div className="price"> 50 kč</div>
          </div>
        </div>
      </div>
      <InventoryList />
    </div>
  );
};

export default SortingStation;
