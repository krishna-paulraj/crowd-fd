const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const balance = ethers.formatEther(
    await deployer.provider.getBalance(deployer.address),
  );

  console.log("Account balance:", balance);

  const CrowdFunding = await ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.waitForDeployment();
  console.log("CrowdFunding contract address:", crowdFunding.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
