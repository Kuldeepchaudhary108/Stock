
<div align="center">
  <h1 style="color:lightblue;">MerCat</h1>
  <h2 style="color:lightblue;">A Blockchain-Based Educational and Paper-Trading Platform</h2>
</div>

## **Overview**
This project integrates blockchain technology with a comprehensive educational and trading ecosystem. Built on the EduChain blockchain, the platform leverages smart contracts to enable users to:

- Earn **reward tokens** by completing courses and tasks.
- Simulate and track trading performance with **test tokens**.
- Request and repay **microloans** in real tokens.
- Monetize their learning by earning real tokens through surveys and ads.

This platform bridges the gap between theoretical learning and practical trading, providing users with a hands-on experience in blockchain ecosystems.

---

## **Features**
### **1. Blockchain Integration**
- **Reward Token**: MerCat token to incentivize course completion and trading growth.
- **Learning Manager**: Tracks course completion and rewards users with test tokens.
- **Trading Manager**: Simulates trading scenarios and tracks performance.
- **Loan Manager**: Provides microloans in real tokens to eligible users.
- **Earning Manager**: Rewards users with real tokens for completing tasks like surveys.

### **2. Educational Benefits**
- Interactive courses to help users understand blockchain concepts.
- Incentivized learning with tokenized rewards.

### **3. Trading Simulator**
- Deposit test tokens to simulate trading.
- Track growth percentages and gain experience in trading.
- Advanced chart integration for better readability of stock price & stock actions. 

### **4. Monetization Opportunities**
- Earn real tokens for completing tasks and surveys.
- Use real tokens to repay loans or fund further learning.

---

## **Smart Contracts**
The platform consists of the following smart contracts:

| Contract          | Address                                    | Purpose                                   |
|-------------------|--------------------------------------------|-------------------------------------------|
| **Reward Token**  | `0xb27A31f1b0AF2946B7F582768f03239b1eC07c2c` | ERC-20 token for test and real tokens.    |
| **Learning Manager** | `0xcD6a42782d230D7c13A74ddec5dD140e55499Df9` | Manages course rewards.                  |
| **Trading Manager** | `0xaE036c65C649172b43ef7156b009c6221B596B8b` | Simulates trading performance tracking.   |
| **Loan Manager**   | `0x9d83e140330758a8fFD07F8Bd73e86ebcA8a5692` | Provides and tracks microloans.          |
| **Earning Manager** | `0xD4Fc541236927E2EAf8F27606bD7309C1Fc2cbee` | Rewards real tokens for task completion.  |

---

## **Tech Stack**
### **Frontend**
- **React.js**
- **ethers.js** for blockchain interactions
- **MetaMask** integration for wallet connectivity

### **Backend**
- **Node.js** with **Express**
- **MongoDB** for data storage
- **dotenv** for environment variable management

### **Blockchain**
- Smart contracts written in **Solidity**
- Deployed on the **EduChain Open Campus blockchain**

---

## **Setup Instructions**
### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd Blockchain_Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend
1. Navigate to the backend directory:
   ```bash
   cd Blockchain_Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

### Environment Variables
Create a `.env` file in the backend directory with the following content:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>
RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
PORT=5000
```

---

## **Key Features**
- **Learning Incentives**: Earn tokens for completing courses.
- **Realistic Trading**: Simulate trades and track performance.
- **Microloans**: Access real tokens for trading or education.
- **Task Rewards**: Complete surveys and earn real tokens.

---

## (Created By : Khyati & Kuldeep)
## **Contributors**
We welcome contributions! Feel free to open issues or pull requests to enhance this platform.

---

## **License**
This project is licensed under the MIT License.
