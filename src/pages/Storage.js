import React from "react";
import "./Storage.css";
import InventoryList from "../components/InventoryList.js";

const Storage = () => {
  return (
    <div className="page content">
      <div className="left-section stock">
        <div className="main-row">
          <div className="left">
            <img src="img/triko.png" alt="Převoz odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>Triko</div>
              <div>Množství: 3 Cena: 15kč</div>
            </div>
          </div>
          <div className="right">
            <button>Prodat 1x</button>
            <button>Prodat vše</button>
          </div>
        </div>
        <div className="main-row">
          <div className="left">
            <img src="img/lahev.png" alt="Třídění odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>Triko</div>
              <div>Množství: 4 Cena: 8kč</div>
            </div>
          </div>
          <div className="right">
            <button>Prodat 1x</button>
            <button>Prodat vše</button>
          </div>
        </div>
        <div className="main-row">
          <div className="left">
            <img src="img/sesit.png" alt="Třídění odpadu" />
          </div>
          <div className="middle">
            <div className="text">
              <div>Triko</div>
              <div>Množství: 15 Cena: 20kč</div>
            </div>
          </div>
          <div className="right">
            <button>Prodat 1x</button>
            <button>Prodat vše</button>
          </div>
        </div>
        <div className="main-row">
          <div className="left">
            <img src="img/okno.png" alt="Třídění odpadu" />
          </div>

          <div className="middle">
            <div className="text">
              <div>Triko</div>
              <div>Množství: 1 Cena: 40kč</div>
            </div>
          </div>
          <div className="right">
            <button>Prodat 1x</button>
            <button>Prodat vše</button>
          </div>
        </div>
      </div>
      <InventoryList />
    </div>
  );
};

export default Storage;
