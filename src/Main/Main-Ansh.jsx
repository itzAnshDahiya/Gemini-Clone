import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../assets/assets";
import { Context } from "../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User icon" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, User</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest some beautiful places to see on a road trip</p>
            <img src={assets.compass_icon} alt="Compass icon" />
          </div>

          <div className="card">
            <p>Briefly summarize this concept</p>
            <img src={assets.bulb_icon} alt="Bulb icon" />
          </div>

          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="Message icon" />
          </div>

          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="Code icon" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery icon" />
              <button className="mic-button">
                <img src={assets.mic_icon} alt="Mic icon" />
              </button>
              <button className="search-button" onClick={onSent}>
                <img src={assets.send_icon} alt="Send icon" />
              </button>
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
