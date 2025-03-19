import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../assets/assets";
import { Context } from "../context/context";

const Main = () => {

const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, User</span>
          </p>
          <p>How Can I Help You Today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest Some Beautiful Places To See On A Road Trip</p>
            <img src={assets.compass_icon} alt="Compass-icon" />
          </div>

          <div className="card">
            <p>Briefly Summarize This Concept</p>
            <img src={assets.bulb_icon} alt="Compass-icon" />
          </div>

          <div className="card">
            <p>Brainstorm Team Bonding Activities For Our Work Retreat</p>
            <img src={assets.message_icon} alt="Compass-icon" />
          </div>

          <div className="card">
            <p>Improve The Readibility Of The Following Code</p>
            <img src={assets.code_icon} alt="Compass-icon" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a Prompt" />
            <div>
                <img src={assets.gallery_icon }alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">Gemini May Display Innucrate Info, Includin About People, So Double-Check Its</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
