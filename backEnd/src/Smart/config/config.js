import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const rewardTokenAbi = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "src/Smart/contracts/abis/RewardToken.json"),
    "utf8"
  )
);
const learningManagerAbi = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "src/Smart/contracts/abis/LearningManager.json"),
    "utf8"
  )
);
const tradingManagerAbi = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "src/Smart/contracts/abis/TradingManager.json"),
    "utf8"
  )
);
const loanManagerAbi = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "src/Smart/contracts/abis/LoanManager.json"),
    "utf8"
  )
);
const earningManagerAbi = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "src/Smart/contracts/abis/EarningManager.json"),
    "utf8"
  )
);

const config = {
  contracts: {
    rewardToken: {
      address: "0xb27A31f1b0AF2946B7F582768f03239b1eC07c2c",
      abi: rewardTokenAbi,
    },
    learningManager: {
      address: "0xcD6a42782d230D7c13A74ddec5dD140e55499Df9",
      abi: learningManagerAbi,
    },
    tradingManager: {
      address: "0xaE036c65C649172b43ef7156b009c6221B596B8b",
      abi: tradingManagerAbi,
    },
    loanManager: {
      address: "0x9d83e140330758a8fFD07F8Bd73e86ebcA8a5692",
      abi: loanManagerAbi,
    },
    earningManager: {
      address: "0xD4Fc541236927E2EAf8F27606bD7309C1Fc2cbee",
      abi: earningManagerAbi,
    },
  },
};

export default config;
