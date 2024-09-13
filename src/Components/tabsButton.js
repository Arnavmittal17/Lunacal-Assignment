import React, { useState } from "react";
import { motion } from "framer-motion";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { IconButton } from "@mui/material";
import './TabButton.css';

const TabButton = () => {
  const [selectedTab, setSelectedTab] = useState("About Me");

  const tabs = [
    { name: "About Me" },
    { name: "Experiences" },
    { name: "Recommended" },
  ];

  return (
    <div className="container">
      <div className="iconContainer">
        <IconButton sx={{color:"#ffffff"}}>
          <HelpOutlineIcon />
        </IconButton>
      </div>

      <div className="tabsContainer">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tabButton ${selectedTab === tab.name ? 'selected' : ''}`}
            onClick={() => setSelectedTab(tab.name)}
          >
            {selectedTab === tab.name && (
              <motion.div
                className="selectedTab"
                layoutId="selectedTab"
                transition={{ type: "spring", stiffness: 500, damping: 60 }}
              />
            )}
            <div style={{ zIndex: 10 }}>
              <span className="tabText">
                {tab.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="content">
        {selectedTab === "About Me" && (
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY...
          </p>
        )}
        {selectedTab === "Experiences" && (
          <p>
            This is the Experiences content...Hello! I’m Dave, your sales rep
            here from Salesforce. I’ve been working at this awesome company for
            3 years now. I was born and raised in Albany, NY...
          </p>
        )}
        {selectedTab === "Recommended" && (
          <p>
            This is the Recommended content...Hello! I’m Dave, your sales rep
            here from Salesforce. I’ve been working at this awesome company for
            3 years now. I was born and raised in Albany, NY...
          </p>
        )}
      </div>
    </div>
  );
};

export default TabButton;
