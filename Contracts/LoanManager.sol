// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RewardToken.sol";

contract LoanManager {
    RewardToken public realToken;

    struct Loan {
        uint256 amount;
        uint256 repaid;
        bool approved;
    }

    mapping(address => Loan) public loans;

    constructor(address _realToken) {
        realToken = RewardToken(_realToken);
    }

    function requestLoan(address user, uint256 amount) external {
        require(loans[user].amount == 0, "Existing loan must be repaid first");
        loans[user] = Loan(amount, 0, true); // Auto-approve loans for simplicity
        realToken.mint(user, amount); // Disburse loan in real tokens
    }

    function repayLoan(address user, uint256 amount) external {
        Loan storage loan = loans[user];
        require(loan.approved, "Loan not approved");
        require(amount <= loan.amount - loan.repaid, "Over-repayment not allowed");

        realToken.transferFrom(user, address(this), amount);
        loan.repaid += amount;
    }

    function isLoanCleared(address user) external view returns (bool) {
        Loan storage loan = loans[user];
        return loan.repaid >= loan.amount;
    }
}
