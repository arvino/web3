const hre = require("hardhat");

async function main() {
  const Identity = await hre.ethers.getContractFactory("Identity");
  const identity = await Identity.deploy(
    "Arvino Zulka",
    "System Analyst / Senior Developer",
    15
  );

  await identity.deployed();

  console.log("Identity deployed to:", identity.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 