require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  paths: {
    artifacts: "./contracts/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
}; 