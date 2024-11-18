import React from "react";
import "./SortingStation.css";

const SortingStation = () => {
  return (
    <div className="sorting-station">
      <div className="content">
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
        <div className="right-section">
          <div className="info-box">
            <div className="info-row">
              <div className="picture">
                <img src="/img/peníze.png" alt="Peníze" />
              </div>
              <div className="text">150 kč </div>
            </div>
            <div className="info-row">
              <div className="picture">
                <img src="/img/plast.png" alt="Plast" />
              </div>
              <div className="text">2 kg </div>
            </div>
            <div className="info-row">
              <div className="picture">
                <img src="/img/papír.png" alt="Plast" />
              </div>
              <div className="text">4 kg </div>
            </div>
            <div className="info-row">
              <div className="picture">
                <img src="/img/sklo.png" alt="Plast" />
              </div>
              <div className="text">6 kg </div>
            </div>
            <div className="info-row">
              <div className="picture">
                <img src="/img/smešný koš.png" alt="Plast" />
              </div>
              <div className="text">8 kg </div>
            </div>
          </div>
          <button className="purchase-button">
            Koupit odpad - 10 kg / 15 kč
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingStation;
