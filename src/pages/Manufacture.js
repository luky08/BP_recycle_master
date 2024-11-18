import React from "react";
import "./Manufacture.css";
import InventoryList from "../components/InventoryList.js";

const Manufacture = () => {
  return (
    <div className="page content">
      <div className="left-section">
        <div className="main-row">
          <div className="left">
            <img src="img/triko.png" alt="Převoz odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>lvl1 - Vyrob triko</div>
              <div>2 kg (plast) - 3 min</div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="right">
            <img src="img/upgrade-text.png" alt="Upgrade" />
            <div className="price"> 25 kč</div>
          </div>
        </div>
        <div className="main-row">
          <div className="left">
            <img src="img/lahev.png" alt="Třídění odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>lvl1 - Vyrob láhev</div>
              <div>2,5 kg (sklo) - 3 min</div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="right">
            <img src="img/upgrade-text.png" alt="Upgrade" />
            <div className="price"> 25 kč</div>
          </div>
        </div>
        <div className="main-row">
          <div className="left">
            <img src="img/sesit.png" alt="Třídění odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>lvl1 - Vyrob sešit</div>
              <div>1,5 kg (papír) - 3 min</div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="right">
            <img src="img/upgrade-text.png" alt="Upgrade" />
            <div className="price"> 25 kč</div>
          </div>
        </div>
        <div className="main-row">
          <div className="left">
            <img src="img/okno.png" alt="Třídění odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>lvl1 - Vyrob plastové okno</div>
              <div>5 kg (plast) 4 kg (sklo)- 3 min</div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="right">
            <img src="img/upgrade-text.png" alt="Upgrade" />
            <div className="price"> 25 kč</div>
          </div>
        </div>
      </div>
      <InventoryList />
    </div>
  );
};

export default Manufacture;
