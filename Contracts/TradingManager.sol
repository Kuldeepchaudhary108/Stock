// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RewardToken.sol";

contract TradingManager {
    RewardToken public testToken;
    mapping(address => uint256) public tradeGrowth;
    mapping(address => uint256) public testTokenBalance;

    constructor(address _testToken) {
        testToken = RewardToken(_testToken);
    }

    function depositTestTokens(address user, uint256 amount) external {
        testToken.transferFrom(user, address(this), amount);
        testTokenBalance[user] += amount;
    }

    function simulateTrade(address user, uint256 profitPercent) external {
        require(testTokenBalance[user] > 0, "Insufficient test tokens");
        tradeGrowth[user] += profitPercent; // Track trading performance
    }

    function getTradeGrowth(address user) external view returns (uint256) {
        return tradeGrowth[user];
    }
}
