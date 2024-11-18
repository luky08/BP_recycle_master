import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import SortingStation from "./pages/SortingStation";
import Manufacture from "./pages/Manufacture";
import Storage from "./pages/Storage";

function App() {
  const [activeTab, setActiveTab] = useState("sorting");

  const renderContent = () => {
    switch (activeTab) {
      case "sorting":
        return <SortingStation />;
      case "manufacture":
        return <Manufacture />;
      case "storage":
        return <Storage />;
      default:
        return <SortingStation />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;
