import { useState } from "react";
import TabContent from "./TabContent";

const Tabs = () => {
  const tabs = [
    { id: "home-tab", title: "Home", content: "Welcome to the Home page!" },
    { id: "about-tab", title: "About", content: "Learn more About us." },
    {
      id: "services-tab",
      title: "Services",
      content: "Discover our Services.",
    },
    {
      id: "contact-tab",
      title: "Contact",
      content: "Contact us for more information.",
    },
  ];

  //  get initial tab
  const getInitialTab = () => {
    return localStorage.getItem("activeTab") || "home-tab";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());

  const handleTabClick = (id) => {
    setActiveTab(id);
    localStorage.setItem("activeTab", id);
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="content">
        <TabContent activeTab={activeTab} tabs={tabs} />
      </div>
    </div>
  );
};

export default Tabs;
