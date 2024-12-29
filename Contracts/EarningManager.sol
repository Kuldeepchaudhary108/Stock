// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./RewardToken.sol";

contract EarningManager {
    RewardToken public realToken;
    mapping(address => uint256) public realTokenBalance;

    constructor(address _realToken) {
        realToken = RewardToken(_realToken);
    }

    function completeTask(address user, uint256 reward) external {
        realToken.mint(user, reward); // Reward real tokens for completing tasks
        realTokenBalance[user] += reward;
    }

    function getRealTokenBalance(address user) external view returns (uint256) {
        return realTokenBalance[user];
    }
}