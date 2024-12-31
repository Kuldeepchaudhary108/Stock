import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('<your-blockchain-node-url>');
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

export const getContract = (abi, address) => {
    return new ethers.Contract(address, abi, wallet);
};
 