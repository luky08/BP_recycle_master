import React from "react";
import "./InventoryList.css";

const Inventory = () => {
  return (
    <div className="right-section">
      hej funguju
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
      <button className="purchase-button">Koupit odpad - 10 kg / 15 kč</button>
    </div>
  );
};

export default Inventory;
