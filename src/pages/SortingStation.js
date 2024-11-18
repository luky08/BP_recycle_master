import React from "react";
import "./SortingStation.css";
import InventoryList from "../components/InventoryList.js";

const SortingStation = () => {
  const sorting_items = [
    {
      id: 1, // Jedinečné ID předmětu
      image: "/img/popelar-celej.png",
      level: 1, // Hodnota úrovně
      trashAmount: 100, // Množství odpadu
      time: "00:05:00", // Čas ve formátu hh:mm:ss
      price: 50, // Cena předmětu
    },
    {
      id: 1, // Jedinečné ID předmětu
      image: "/img/popelar-celej.png",
      level: 1, // Hodnota úrovně
      trashAmount: 100, // Množství odpadu
      time: "00:05:00", // Čas ve formátu hh:mm:ss
      price: 50, //
    },
  ];

  return (
    <div className="sorting-station content">
      <div className="left-section">
        <div className="main-row">
          <div className="left">
            <img src={sorting_items.image} alt="Převoz odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>{sorting_items.level} - Převoz odpadu do třídírny</div>
              <div>
                {sorting_items.trashAmount} kg - {sorting_items.time} min
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="right">
            <img src="/img/upgrade-text.png" alt="Upgrade" />
            <div className="price"> {sorting_items.price} kč</div>
          </div>
        </div>
        {/* <div className="main-row text"> Připraveno 32 kg</div>
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
        </div> */}
      </div>
      <InventoryList />
    </div>
  );
};

export default SortingStation;
