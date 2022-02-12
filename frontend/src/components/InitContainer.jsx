import React from "react";

export default function InitContainer({ createMeditationAccount }) {
  return (
    <div className="App">
      <div className="notconnected-container">
        <div className="header-container">
          <button
            className="cta-button submit-gif-button"
            onClick={createMeditationAccount}
          >
            Do One-Time Initialization For Meditation Program Account
          </button>
        </div>
      </div>
    </div>
  );
}
