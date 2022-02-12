import React from 'react'
import ReactPlayer from "react-player";

export default function ConnectedContainer({pushTrack,trackList}) {
  const [inputValue, setInputValue] = React.useState("");
  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };
  const submitTrack = async () => {
    if (inputValue.length === 0) {
      console.log("No track link given!");
      return;
    }
    pushTrack(inputValue.trim());
    setInputValue("");
  };
  return (
    <div className="connected-container">
      <input
        value={inputValue}
        onChange={onInputChange}
        type="text"
        placeholder="Enter YT / soundcloud / Facebook / Vimeo / Twitch / Wistia / DM link!"
      />
      <button onClick={submitTrack} className="cta-button submit-gif-button">
        Submit
      </button>
      <div className="gif-grid">
        {trackList.map((item, index) => (
          <div className="gif-item" key={index}>
            <ReactPlayer url={item.gifLink} />
          </div>
        ))}
      </div>
    </div>
  )
}
