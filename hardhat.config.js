require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const fs = require("fs")

const projectId = "8cfee2ff3be84d32bfafebe45d4305cf";
const privateKey = fs.readFileSync(".secret").toString();
const apiKey = "F53GDI6JQ58PGF3IPQWTSHG9Y83D4SZ6TX";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    testnet: {
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: apiKey
  },
  solidity: "0.8.4",
};
