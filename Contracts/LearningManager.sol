// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RewardToken.sol";

contract LearningManager {
    RewardToken public testToken;
    mapping(address => bool) public courseCompleted;

    constructor(address _testToken) {
        testToken = RewardToken(_testToken);
    }

    function completeCourse(address user, uint256 reward) external {
        require(!courseCompleted[user], "Course already completed");
        courseCompleted[user] = true;
        testToken.mint(user, reward); // Reward test tokens for course completion
    }

    function hasCompletedCourse(address user) external view returns (bool) {
        return courseCompleted[user];
    }
}
