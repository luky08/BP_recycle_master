import React, { useState } from "react";
import "./InventoryList.css";

const Inventory = () => {
  //Proměné
  const [trash, setTrash] = useState(0);
  const [money, setMoney] = useState(50);
  const plastic_waste = useState(50);
  const glass_waste = useState(50);
  const paper_waste = useState(50);

  const addTrash = () => {
    if (money < 15) {
      alert("Nemáš dostatek peněz!");
      return; // Zastaví provádění funkce
    }
    setTrash(trash + 10); // Zvýší množství odpadu
    setMoney(money - 15); // Sníží množství peněz
  };

  return (
    <div className="right-section">
      <div className="info-box">
        <div className="info-row">
          <div className="picture">
            <img src="/img/peníze.png" alt="Peníze" />
          </div>
          <div className="text">{money} kč </div>
        </div>
        <div className="info-row">
          <div className="picture">
            <img src="/img/plast.png" alt="Plast" />
          </div>
          <div className="text">{plastic_waste} kg </div>
        </div>
        <div className="info-row">
          <div className="picture">
            <img src="/img/papír.png" alt="Plast" />
          </div>
          <div className="text">{paper_waste} kg </div>
        </div>
        <div className="info-row">
          <div className="picture">
            <img src="/img/sklo.png" alt="Plast" />
          </div>
          <div className="text">{glass_waste} kg </div>
        </div>
        <div className="info-row">
          <div className="picture">
            <img src="/img/smešný koš.png" alt="Plast" />
          </div>
          <div className="text">{trash} kg </div>
        </div>
      </div>
      <button className="purchase-button" onClick={addTrash}>
        Koupit odpad - 10 kg / 15 kč
      </button>
    </div>
  );
};

export default Inventory;
