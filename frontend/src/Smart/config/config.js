
const config = {
  contracts: {
    rewardToken: {
      address: "0xb27A31f1b0AF2946B7F582768f03239b1eC07c2c",
      abi: require("../contracts/abis/RewardToken.json"),
    },
    learningManager: {
      address: "0xcD6a42782d230D7c13A74ddec5dD140e55499Df9",
      abi: require("../contracts/abis/LearningManager.json"),
    },
    tradingManager: {
      address: "0xaE036c65C649172b43ef7156b009c6221B596B8b",
      abi: require("../contracts/abis/TradingManager.json"),
    },
    loanManager: {
      address: "0x9d83e140330758a8fFD07F8Bd73e86ebcA8a5692",
      abi: require("../contracts/abis/LoanManager.json"),
    },
    earningManager: {
      address: "0xD4Fc541236927E2EAf8F27606bD7309C1Fc2cbee",
      abi: require("../contracts/abis/EarningManager.json"),
    },
  },
};

export default config;
