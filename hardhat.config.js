require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// // task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
// //   const accounts = await hre.ethers.getSigners();

// //   for (const account of accounts) {
// //     console.log(account.address);
// //   }
// // });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
require("@nomiclabs/hardhat-etherscan");
const projectId = "3bcf3dc6d78a49a1a69e16f0dc4d8c5d";
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  solidity: "0.8.4",
  network: {
    hardhat: {
      chainId: 1337
    },
    testnet: {
      url: 'https://ropsten.infura.io/v3/${projectId}',
      accounts: [privateKey]
    }
  },
  etherscan: {
      apiKey: "XTCXYZJVXJYHYEEA5B5MU4V3MJDENXC9A2"
  }
};
