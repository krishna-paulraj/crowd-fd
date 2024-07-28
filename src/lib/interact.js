import { ethers } from "ethers";
import abi from "../../artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";

const provider = new ethers.JsonRpcProvider();

const getContract = (contractAddress) => {
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};

export const getContractData = async (contractAddress, contractABI) => {
  const contract = getContract(contractAddress, abi);

  // Example function call (replace with your actual function)
  const data = await contract.getCampaigns();
  console.log(data);
  return data;
};

export const sendContractTransaction = async (
  contractAddress,
  contractABI,
  ...args
) => {
  const contract = getContract(contractAddress, contractABI);

  // Example transaction (replace with your actual function)
  const tx = await contract.someTransaction(...args);
  await tx.wait();
  return tx;
};
