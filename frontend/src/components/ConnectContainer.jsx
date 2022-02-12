import React from "react";

export default function ConnectContainer({ connectWallet, walletExists }) {
  const handleNoWallet = () => {
    window.open("https://phantom.app/", "_blank")
  }
  if(!walletExists){
    return (
      <button
        className="cta-button connect-wallet-button"
        onClick={handleNoWallet}
      >
        Get Phantom Wallet
      </button>
    );
  }
  return (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );
}
