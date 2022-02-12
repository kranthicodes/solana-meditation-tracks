import React from "react";
import "./App.css";
import useMeditation from "./hooks/useMeditation";
import InitContainer from "./components/InitContainer";
import ConnectContainer from "./components/ConnectContainer";
import ConnectedContainer from "./components/ConnectedContainer";

export default function App() {
  const {
    walletExists,
    walletAddress,
    trackList,
    createMeditationAccount,
    connectWallet,
    pushTrack,
  } = useMeditation();

  if (trackList === null) {
    return <InitContainer createMeditationAccount={createMeditationAccount} />;
  }
  return (
    <div className="App">
      <div className={walletAddress ? "authed-container" : "container"}>
        <div className="header-container">
          <p className="header">Meditation Tracks</p>
          <p className="sub-text">
            View your favourite meditation youtube videos in Metaverse
          </p>
          {!walletAddress && <ConnectContainer walletExists={walletExists} connectWallet={connectWallet} />}
          {walletAddress && (
            <ConnectedContainer pushTrack={pushTrack} trackList={trackList} />
          )}
        </div>
      </div>
    </div>
  );
}
