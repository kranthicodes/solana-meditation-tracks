import React from "react";
import twitterLogo from "../assets/twitter-logo.svg";

export default function Footer() {
  const TWITTER_HANDLE = "skranthi97";
  const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
  return (
    <div className="footer-container">
      <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
      <a
        className="footer-text"
        href={TWITTER_LINK}
        target="_blank"
        rel="noreferrer"
      >{`built by @${TWITTER_HANDLE}`}</a>
    </div>
  );
}
