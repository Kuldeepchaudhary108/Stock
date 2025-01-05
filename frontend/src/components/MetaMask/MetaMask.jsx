import { ethers } from "ethers";
import config from "../../Smart/config/config.js";

async function connectWallet() {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("Connected address:", await signer.getAddress());
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  } else {
    alert("MetaMask is not installed. Please install it!");
  }
}
