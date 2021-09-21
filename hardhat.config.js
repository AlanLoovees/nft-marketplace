require("@nomiclabs/hardhat-waffle");
const fs = require("fs")

const projectId = "8cfee2ff3be84d32bfafebe45d4305cf";
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
